"use client";
import { createContext, useContext, useEffect, useState } from 'react';

const ColorModeContext = createContext();

export function ColorModeProvider({ children }) {
    const [colorMode, setColorMode] = useState('system');

    useEffect(() => {
        // Get saved color mode from localStorage or fallback to 'system'
        const savedMode = localStorage.getItem('color-mode') || 'system';
        setColorMode(savedMode);

        // Apply the current mode to the document body
        document.body.classList.add(savedMode);
    }, []);

    const toggleColorMode = (newMode) => {
        document.body.classList.remove(colorMode);
        document.body.classList.add(newMode);
        setColorMode(newMode);
        localStorage.setItem('color-mode', newMode);
    };

    return (
        <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
            {children}
        </ColorModeContext.Provider>
    );
}

export function useColorMode() {
    return useContext(ColorModeContext);
}
