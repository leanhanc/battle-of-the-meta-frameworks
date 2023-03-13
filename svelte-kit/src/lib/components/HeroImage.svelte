<script lang="ts">
  import heroMobile from "$lib/images/HeroMobile.webp";
  import heroTablet from "$lib/images/HeroTablet.webp";
  import heroDesktop from "$lib/images/HeroDesktop.webp";
</script>

<picture class="hero">
  <source
    srcset={heroMobile}
    media="(max-width: 768px)"
    class="absolute inset-0 h-full w-full object-cover"
  />
  <source
    srcset={heroTablet}
    media="(max-width: 1024px)"
    class="absolute inset-0 h-full w-full object-cover"
  />
  <img
    srcset={heroDesktop}
    alt="San Carlos De Bariloche, Río Negro"
    class="absolute inset-0 h-full w-full object-cover"
  />
  <div
    class="hero-gradient-mobile absolute inset-0 opacity-50 md:hidden"
    aria-hidden
  />
  <div
    class="hero-gradient-tablet absolute inset-0 hidden opacity-50 md:block lg:hidden"
    aria-hidden
  />
  <div
    class="hero-gradient-desktop absolute inset-0 hidden opacity-75 lg:block"
    aria-hidden
  />
</picture>
