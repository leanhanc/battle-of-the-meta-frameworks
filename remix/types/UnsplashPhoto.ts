export interface UnsplashPhoto {
	id: string;
	alt_description: string;
	height: number;
	width: number;
	urls: {
		full: string;
		raw: string;
		regular: string;
		small: string;
		small_s3: string;
		thumb: string;
	};
	links: {
		self: string;
		html: string;
	};
}
