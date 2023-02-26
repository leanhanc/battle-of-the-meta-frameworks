# Remix development log
## Previous experience

I previously had a small experience working with Remix, where I developed a personal finance app. I appreciate the "use the platform" philosophy that they embrace and advocate. When it comes to learning a framework or native web APIs, it takes about the same amount of time. However, in my opinion, using native APIs tends to be more verbose and generally more cumbersome in some cases. On the other hand, being familiar with the platform is an advantage for a developer because it is more future-proof. It's a trade-off, like most things in development.

## Getting started and Hero section

The CLI tool is good. Remix gives you a lot of flexibility to run pretty much everywhere you can run Node. One thing I don't find really intuitive is the idea of (stacks)[https://remix.run/docs/en/v1/pages/stacks]. I feel this could be simplified a bit more like other meta-frameworks.
Since Remix doesn't have an Image component like Next or Astro, I resorted to using the native responsive image browser API. I wasn't successful in using _srcset_ on the native image element, as all images were being loaded regardless of the viewport width. This could have been due to a hydration issue or my improper use of it. Eventually I switched to using the HTML Picture element, which worked flawlessly and allowed me to load the correct image for mobile, tablet, and desktop resolutions.<br>
It took some time to properly set up local font loading and compatibility with Tailwind. Altough the documentation for the [links function](https://remix.run/docs/en/v1/route/links) in Remix is excellent,  I don't think it aligns well with the platform's overall philosophy of "use the platform."