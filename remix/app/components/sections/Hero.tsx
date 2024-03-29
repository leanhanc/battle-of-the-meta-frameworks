// Components
import HeroImage from "~/components/HeroImage";

// Utils
import { ClientOnly } from "remix-utils";

export default function Hero() {
	return (
		<>
			<ClientOnly>{() => <HeroImage />}</ClientOnly>
			<div className="container relative flex h-full w-full flex-col items-center justify-center py-4 lg:items-start">
				<h1 className="heading-shadow relative font-heading text-6xl font-bold tracking-wide">
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
		</>
	);
}
