export const unsplashCollections = {
	bariloche: "_BKkbovYRN4",
	jujuy: "11495610",
	caba: "49433549",
	iguazu: "_FC4KRVKsYs",
};

export function getCurrentCollection(currentUrl: string) {
	const url = new URL(currentUrl);
	const params = url.searchParams;
	const collectionId = params.get("collection");

	return collectionId;
}
