import Image from "next/image";

import localFont from "next/font/local";
import HeroImage from "@/app/components/HeroImage";

const interFont = localFont({ src: "../public/fonts/Inter.ttf" });
const openSansFont = localFont({ src: "../public/fonts/Inter.ttf" });

export default function Home() {
	return (
		<>
			<header
				className={`relative h-full w-full text-center text-gray-100 ${interFont.className}`}
			>
				<HeroImage />
				<div className="container relative flex h-full w-full flex-col items-center justify-center py-4 lg:items-start">
					<h1 className="heading-shadow font-heading relative text-6xl font-bold tracking-wide">
						All Kinds of Beauty
					</h1>
					<p className="heading-shadow-subtle w-max-75 relative mb-14 mt-14 font-sans text-lg font-medium tracking-wider lg:max-w-sm lg:text-left lg:text-xl">
						All the climates, many flavors, one unique passion.
					</p>

					<a
						href="https://www.argentina.tur.ar"
						className="relative mt-24 rounded-md bg-yellow-500 px-10 py-3 font-bold text-gray-900 hover:bg-yellow-600"
						rel="noreferrer"
						target="_blank"
					>
						Meet Argentina
					</a>
				</div>
			</header>
		</>
	);
}
