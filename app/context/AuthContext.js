"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            // fetch current user
            axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/office/current-user`)
                .then(response => {
                    setRole(response.data.data.role);
                })
                .catch(() => {
                    setRole(null);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, []);

    const login = async (credentials) => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/office/login`, credentials);
        // console.log('Login successful:', response.data.data);
        const { access_token, role } = response.data.data;
        // console.log('Login successful:', role);
        localStorage.setItem('token', access_token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
        setRole(role);
    };

    const logout = () => {
        axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/office/logout`);
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
        setRole(null);
    };

    return (
        <AuthContext.Provider value={{ role, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};