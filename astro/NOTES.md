# Astro development log

## Previous experience

I migrated my portfolio to Astro. I had a great time doing so using Svelte for some components that needed interaction, so I was able to take advantage of their "bring your own framework" [feature](https://docs.astro.build/en/core-concepts/framework-components). <br />
Unfortunately, the [i18next integration](https://www.npmjs.com/package/astro-i18next) I needed was not mature enough at that time, so I had to include a lot of client-side JS to write to and read from the [Nano Stores](https://docs.astro.build/en/core-concepts/sharing-state/). Other than that, the developer experience (DX) was great, and it keeps getting better.


## Getting started and Hero Section

Astro has a great CLI to get you started quickly, and their documentation is really good. I didn't encounter any problems whatsoever here. <br />
[Integration with Tailwind](https://docs.astro.build/es/guides/integrations-guide/tailwind/) is pretty straightforward too.
For the Hero section, I decided to use the HTML picture element going forward. The idea is to better compare the impact of such components in a future image gallery section and keep the Hero consistent across all meta-frameworks.