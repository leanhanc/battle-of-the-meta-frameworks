import { json } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";

import { createApi } from "unsplash-js";

// Utils
import { getCurrentCollection, unsplashCollections } from "~/lib/unsplash";

// Components
import Hero from "~/components/sections/Hero";
import Destinations from "~/components/sections/Destinations";

// Types
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import type { UnsplashPhoto } from "types/UnsplashPhoto";
import type { MasonryGalleryProps } from "~/components/MasonryGallery";
import type { ApiResponse } from "unsplash-js/dist/helpers/response";

export const action: ActionFunction = async ({ request }) => {
	const collectionId = getCurrentCollection(request.url);

	if (!collectionId) {
		return json({ photos: [] });
	}

	const unsplash = createApi({
		accessKey: process.env.UNSPLASH_KEY || "",
		fetch: fetch,
	});

	const data: ApiResponse<{ results: UnsplashPhoto[] }> =
		await unsplash.collections.getPhotos({
			collectionId,
		});

	if (!data?.response) {
		return json({ photos: [] });
	}

	return json({
		photos: data.response.results.slice(0, 8) || [],
		collectionId,
	});
};

export const loader: LoaderFunction = async ({ request }) => {
	const collectionId = getCurrentCollection(request.url);

	const unsplash = createApi({
		accessKey: process.env.UNSPLASH_KEY || "",
		fetch: fetch,
	});

	const data: ApiResponse<{ results: UnsplashPhoto[] }> =
		await unsplash.collections.getPhotos({
			collectionId: collectionId || unsplashCollections.bariloche,
		});

	if (!data?.response) {
		return json({ photos: [] });
	}

	return json({
		photos: data.response.results.slice(0, 8) || [],
	});
};

export default function Index() {
	const initialGalleryPhotos = useLoaderData() satisfies MasonryGalleryProps;
	const actionData = useActionData() satisfies
		| (MasonryGalleryProps & { collectionId: string })
		| undefined;

	return (
		<>
			<header className="relative h-full w-full text-center text-gray-100">
				<Hero />
			</header>

			<main className="bg-sky-50">
				<Destinations
					imageGalleryPhotos={actionData?.photos}
					initialGalleryPhotos={initialGalleryPhotos.photos}
					currentCollection={actionData?.collectionId || ""}
				/>
			</main>
		</>
	);
}
