import OfficeLogin from '@/app/components/Auth/OfficeLogin';
export const metadata = {
	title: "Office Login",
	description: "Office Login description",
};

export default function Home() {
	return (
		<>
			<OfficeLogin />
		</>
	);
}
