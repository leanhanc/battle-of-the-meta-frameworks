<template>
	<picture class="hero">
		<source
			srcset="/images/HeroMobile.webp"
			media="(max-width: 768px)"
			class="absolute inset-0 h-full w-full object-cover"
		/>
		<source
			srcset="/images/HeroDesktop.webp"
			media="(max-width: 1024px)"
			class="absolute inset-0 h-full w-full object-cover"
		/>
		<img
			src="/images/HeroDesktop.webp"
			alt="San Carlos De Bariloche, Río Negro"
			class="absolute inset-0 h-full w-full object-cover"
		/>
		<div
			class="hero-gradient-mobile absolute inset-0 opacity-50 md:hidden"
			aria-hidden
		></div>
		<div
			class="hero-gradient-tablet absolute inset-0 hidden opacity-50 md:block lg:hidden"
			aria-hidden
		></div>
		<div
			class="hero-gradient-desktop absolute inset-0 hidden opacity-75 lg:block"
			aria-hidden
		></div>
	</picture>
</template>
