import { Form, useFormAction } from "@remix-run/react";

// Components
import MasonryGallery from "~/components/MasonryGallery";

// Types
import type { UnsplashPhoto } from "types/UnsplashPhoto";

// Utils
import { unsplashCollections } from "~/lib/unsplash";

interface DestinationsProps {
	imageGalleryPhotos?: UnsplashPhoto[];
	initialGalleryPhotos?: UnsplashPhoto[];
	currentCollection: string;
}

export default function Destinations({
	imageGalleryPhotos,
	initialGalleryPhotos,
	currentCollection,
}: DestinationsProps) {
	return (
		<section id="photo-gallery" className="container flex h-screen flex-col">
			<header className="w-100 mt-12 flex flex-col lg:w-4/5">
				<h2 className="font-heading text-3xl font-bold text-sky-600 lg:text-6xl ">
					Explore and Experience
				</h2>
				<p className="text-md mt-6 font-medium text-slate-600 lg:text-2xl">
					Some of the destinations you can't miss.
				</p>
			</header>

			<Form method="post" className="mt-12 mb-12">
				<ul className="flex gap-8 overflow-auto py-3">
					<li>
						<button
							formAction={useFormAction(
								`?index&collection=${unsplashCollections.bariloche}`
							)}
							className={`min-w-max p-2 ${
								(!currentCollection ||
									currentCollection === unsplashCollections.bariloche) &&
								"border-b-2 border-solid border-yellow-500 font-medium"
							}`}
						>
							San Carlos de Bariloche
						</button>
					</li>

					<li>
						<button
							formAction={useFormAction(
								`?index&collection=${unsplashCollections.caba}`
							)}
							className={`min-w-max p-2 ${
								currentCollection === unsplashCollections.caba &&
								"border-b-2 border-solid border-yellow-500 font-medium"
							}`}
						>
							Ciudad de Buenos Aires
						</button>
					</li>

					<li>
						<button
							formAction={useFormAction(
								`?index&collection=${unsplashCollections.jujuy}`
							)}
							className={`min-w-max p-2 ${
								currentCollection === unsplashCollections.jujuy &&
								"border-b-2 border-solid border-yellow-500 font-medium"
							}`}
						>
							Provincia de Jujuy
						</button>
					</li>

					<li>
						<button
							formAction={useFormAction(
								`?index&collection=${unsplashCollections.iguazu}`
							)}
							className={`min-w-max p-2 ${
								currentCollection === unsplashCollections.iguazu &&
								"border-b-2 border-solid border-yellow-500 font-medium"
							}`}
						>
							Cataratas del Iguazú
						</button>
					</li>
				</ul>
			</Form>

			<MasonryGallery photos={imageGalleryPhotos || initialGalleryPhotos} />
		</section>
	);
}
