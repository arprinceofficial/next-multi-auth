"use client";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { useAuth } from '@/app/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Home() {
	const [loginInput, setLoginInput] = useState('');
	const [password, setPassword] = useState('');
	const { adminLogin, role, loading } = useAuth();
	const router = useRouter();
	useEffect(() => {
		if (!loading && role) {
			if (role.name === 'Admin') {
				router.push('/admin');
			} else {
				router.push('/office');
			}
		}
	}, [role, loading, router]);

	if (loading) {
		return <div>Loading...</div>;
	}
	
	const handleSubmit = async (event) => {
		event.preventDefault();

		const formData = {
			loginInput: loginInput,
			password: password,
		};
		await adminLogin(formData);
		router.push('/admin');
	};

	return (
		<>
			<div className="h-screen w-full flex flex-wrap flex items-center justify-center">
				<div className="relative md:w-1/2 w-full sm:pr-4 pr-3 pb-3 flex justify-center">
					<div className="p-5 sm:max-w-[500px] w-full">
						<div className="pl-8">
							<div>
								<div className="flex flex-col justify-center items-center">
									<div>
										<Image
											src="https://queue.arprince.me/img/main-logo.png"
											alt="logo"
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: '100px', height: 'auto' }}
											priority
										/>
									</div>
								</div>
							</div>
							<form
								onSubmit={handleSubmit}
								className="mt-4 rounded-lg p-5 border-[2px] border-gray-200 dark:border-gray-700">
								<h2 className="mt-2 text-center text-[22px] font-bold tracking-tight text-gray-900 dark:text-gray-200">Admin Login</h2>
								<div className="mt-10">
									<label className="block font-medium text-gray-700 dark:text-gray-300 text-[14px] mb-2"><span>User ID</span></label>
									<div className="relative mt-1">
										<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-4 w-4 text-gray-400">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
												></path>
											</svg>
										</div>
										<input
											className="flex w-full focus:border-green-500 focus:ring-green-500 mt-1 items-center border-[1px] border-[solid] border-gray-300 [box-shadow:0px_1px_3px_0px_rgba(0,_0,_0,_0.05)] pl-[10px] h-[40px] sm:text-sm text-[14px] pl-[40px]"
											id="loginInput"
											type="text"
											required=""
											autoComplete="loginInput"
											placeholder="i.e. 2324I245986789"
											value={loginInput}
											onChange={(e) => setLoginInput(e.target.value)}
										/>
									</div>
									<div className="mt-2" style={{ display: 'none' }}>
										<p className="text-red-600 dark:text-red-400 text-sm lg:text-xl"></p>
									</div>
								</div>
								<div className="mt-2">
									<label className="block font-medium text-gray-700 dark:text-gray-300 text-[14px] mb-2"><span>Password</span></label>
									<div className="relative mt-1">
										<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-4 w-4 text-gray-400">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
												></path>
											</svg>
										</div>
										<input
											className="flex w-full focus:border-green-500 focus:ring-green-500 mt-1 items-center border-[1px] border-[solid] border-gray-300 [box-shadow:0px_1px_3px_0px_rgba(0,_0,_0,_0.05)] pl-[10px] h-[40px] sm:text-sm text-[14px] pl-[40px]"
											id="password"
											type="password"
											required=""
											autoComplete="current-password"
											placeholder="i.e. password#123"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
										/>
										<i className="absolute top-[14px] right-4 text-[14px] text-gray-600 fa cursor-pointer hidden fa-eye-slash"></i>
									</div>
								</div>
								<div className="flex items-center justify-center mt-16">
									<button
										className="flex items-center px-4 py-2 bg-[#00B076] border border-transparent font-semibold text-white uppercase tracking-widest hover:bg-[#00B076] focus:bg-[#00B076] active:bg-[#00B076] focus:outline-none focus:ring-2 focus:ring-[#00B076] focus:ring-offset-2 transition ease-in-out duration-150 justify-center items-center rounded-[64px] bg-[#00B076] w-[100%] h-[45px] text-[14px]"
									>
										<span>Login</span>
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
