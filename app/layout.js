import localFont from "next/font/local";
import "./globals.css";
import "@/app/assets/fa-6.4.0/css/all.css";
// import "@/app/assets/scss/style.scss";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

import Favicon from "./public/main-logo.png";
export const metadata = {
	icons: [{ rel: 'icon', url: Favicon.src }],
};
import { AuthProvider } from '@/app/context/AuthContext';
import { ColorModeProvider } from '@/app/context/ColorModeContext';
export default function RootLayout({ children }) {
	return (
		<ColorModeProvider>
			<html lang="en">
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				>
					<AuthProvider>
						{children}
					</AuthProvider>
				</body>
			</html>
		</ColorModeProvider>
	);
}
