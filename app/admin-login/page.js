import AuthAdminLogin from '@/app/components/Auth/AdminLogin';
export const metadata = {
	title: "Admin Login",
	description: "Admin description",
};

export default function Home() {
	return (
		<>
			<AuthAdminLogin />
		</>
	);
}
