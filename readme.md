# The battle of the meta-frameworks 👊

## What is this?

I'll be building the exact same app with [React](https://reactjs.org/) with this meta-frameworks:

1. [Remix](https://remix.run)
2. [Astro](https://astro.build)
3. [Next JS](https://nextjs.org)
4. [Qwik City](https://qwik.builder.io/qwikcity/overview/)
5. [Solid Start](https://start.solidjs.com)
6. [Svelte-Kit](https://kit.svelte.dev/)
7. [Nuxt](https://nuxtjs.org/)

Then I will test them with [PageSpeed Insights](https://pagespeed.web.dev) to see which one has better performance.

The app is a "Visit Argentina 🇦🇷" fake site that features images, videos, a contact form and data fetched from various sources.
Those requirements serve as a good feature set of what you might encounter when building a site.

You might be wondering what a _meta-framework_ is.
According to OpenAI's [ChatGPT](https://chat.openai.com/chat):

> A meta framework is a higher-level framework that provides a set of abstractions and tools built on top of another framework or platform. It provides a set of additional features, tools, and abstractions to make building complex applications easier and more efficient.

More on JavaScript meta-frameworks can be found in this [blog post](https://prismic.io/blog/javascript-meta-frameworks-ecosystem).

## Yes, but why?

Full-stack frameworks are becoming increasingly popular as they offer new and exciting technology that promises a great developer experience and, as you may have heard, sites that are _blazingly fast_ 🚀.
This project has been largely motivated by great videos like Fireship's [10 Rendering Patterns for Web Apps](https://www.youtube.com/watch?v=Dkx5ydvtpCA) and Academind's [The past, current state & future of JavaScript frameworks](https://www.youtube.com/watch?v=5EsLj3JOdE0).
As discussed in this videos, this frameworks agree that reducing the amount of JavaScript sent to the client and doing more work on the server side is the way forward to have great speed and SEO at the same time. However, they apply different techniques to achieve it.
Between you and me, Tech Twitter [drama](https://twitter.com/ryanflorence/status/1586820806625046529?s=20) has made this topic more interesting. The competition of this frameworks to be the speed king has been fierce. This project may help shed some light on the matter.

## Technical details

- I will use SSR in all cases because it is the rendering pattern supported by all frameworks, enabling easier and fairer comparisons.
- All sites will be deployed on a DigitalOcean Droplet to even the playing field. This setup also enables the use of React 18 streaming server components, which will be utilized when loading data from external sources.
- The goal is to compare the best possible version of the site with each framework. If you are an expert in a particular framework, I would appreciate any contributions to fully leverage the capabilities of each technology.

## Disclaimer

My understanding and previous experience with these frameworks are not the same, but that is part of the motivation for this project. I will evaluate their developer experience by writing about the quality of their documentation and my personal experience learning and using the technology. Contributions are welcome to help make the evaluation fairer. However, this is not expected to be a 100% scientific test. The bottom line is to have some fun 🙂.
