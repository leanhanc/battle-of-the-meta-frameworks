import type { UnsplashPhoto } from "types/UnsplashPhoto";

export interface MasonryGalleryProps {
	photos?: UnsplashPhoto[];
}

export default function MasonryGallery({ photos }: MasonryGalleryProps) {
	if (!photos?.length) {
		return null;
	}

	return (
		<article className="masonry">
			<ul>
				{photos.slice(0, 3).map((photo) => {
					return (
						<li key={photo.id}>
							<a href={photo.links.html} target="_blank" rel="noreferrer">
								<img
									src={photo.urls.regular}
									alt={photo.alt_description}
									width={photo.width}
									height={photo.height}
								/>
							</a>
						</li>
					);
				})}
			</ul>

			<ul>
				{photos.slice(3, 6).map((photo) => {
					return (
						<li key={photo.id}>
							<a href={photo.links.html} target="_blank" rel="noreferrer">
								<img
									src={photo.urls.regular}
									alt={photo.alt_description}
									width={photo.width}
									height={photo.height}
								/>
							</a>
						</li>
					);
				})}
			</ul>

			<ul>
				{photos.slice(6, 8).map((photo) => {
					return (
						<li key={photo.id}>
							<a href={photo.links.html} target="_blank" rel="noreferrer">
								<img
									src={photo.urls.regular}
									alt={photo.alt_description}
									width={photo.width}
									height={photo.height}
								/>
							</a>
						</li>
					);
				})}
			</ul>
		</article>
	);
}
