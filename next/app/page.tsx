import localFont from "next/font/local";

// Hero
import Hero from "@/app/components/sections/Hero";

const interFont = localFont({ src: "../public/fonts/Inter.ttf" });

export default function Home() {
	return (
		<header
			className={`relative h-full w-full text-center text-gray-100 ${interFont.className}`}
		>
			<Hero />
		</header>
	);
}
