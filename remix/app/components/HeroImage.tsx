export default function HeroImage() {
	return (
		<picture className="hero">
			<source
				srcSet="images/HeroMobile.webp"
				media="(max-width: 768px)"
				className="absolute inset-0 h-full w-full object-cover"
			/>
			<source
				srcSet="images/HeroDesktop.webp"
				media="(max-width: 1024px)"
				className="absolute inset-0 h-full w-full object-cover"
			/>
			<img
				src="images/HeroDesktop.webp"
				alt="San Carlos De Bariloche, Río Negro"
				className="absolute inset-0 h-full w-full object-cover"
			/>
			<div
				className="hero-gradient-mobile absolute inset-0 opacity-50 md:hidden"
				aria-hidden
			/>
			<div
				className="hero-gradient-tablet absolute inset-0 hidden opacity-50 md:block lg:hidden"
				aria-hidden
			/>
			<div
				className="hero-gradient-desktop absolute inset-0 hidden opacity-75 lg:block"
				aria-hidden
			/>
		</picture>
	);
}
