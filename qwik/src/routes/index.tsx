import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

// Components
import HeroImage from "~/components/HeroImage";

export const head: DocumentHead = {
	title: "Visit Argentina",
	meta: [
		{
			name: "description",
			content: "This is a fake site part of a technical experiment",
		},
	],
};

export default component$(() => {
	return (
		<>
			<header class="relative h-full w-full text-center text-gray-100">
				<HeroImage />
				<div class="container relative flex h-full w-full flex-col items-center justify-center py-4 lg:items-start">
					<h1 class="heading-shadow relative font-heading text-6xl font-bold tracking-wide">
						All Kinds of Beauty
					</h1>
					<p class="heading-shadow-subtle w-max-75 relative mb-14 mt-14 font-sans text-lg font-medium tracking-wider lg:max-w-sm lg:text-left lg:text-xl">
						All the climates, many flavors, one unique passion.
					</p>

					<a
						href="https://www.argentina.tur.ar"
						class="relative mt-24 rounded-md bg-yellow-500 px-10 py-3 font-bold text-gray-900 hover:bg-yellow-600"
						rel="noreferrer"
						target="_blank"
					>
						Meet Argentina
					</a>
				</div>
			</header>
		</>
	);
});
