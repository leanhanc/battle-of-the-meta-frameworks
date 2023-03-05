# Next JS development log

## Previous experience

Of all the meta-frameworks featured in this project, Next.js is the one that I have the most experience with. This is why I was able to set up the project fairly quickly. I've been playing around with React Server Components (RSC) and streaming for some time now, and one of the biggest motivations for this project is to test it against other approaches taken, for example, by Qwik or Solid.

## Getting started and Hero Section

I am using the [next/font](https://nextjs.org/docs/api-reference/next/font) component, which I find appropriate for benchmarking. The idea is to use
as much feature of the meta-frameworks to compare the best possible version of each.
The [next/image](https://nextjs.org/docs/api-reference/next/image) component will be used in a future section dedicated to image loading.
While I found the documentation for the new font feature somewhat difficult to navigate at first, I found it cool once I got the hang of it. However, one small issue I have with it is that you need to apply the required styles to an element inside your JSX to pick up the font-family configuration. I would prefer a way to apply these styles globally or to the _:root_ pseudo-class.

Other than this, everything was smooth.
