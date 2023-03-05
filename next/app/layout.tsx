import "./reset.css";
import "./output.css";

export const metadata = {
	title: "Visit Argentina",
	description: "This is a fake site part of a technical experiment",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
