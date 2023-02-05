# My general experience with Remix

I previously had a small experience working with Remix, having developed a small budget/personal finance app. I generally appreciate the platform philosophy they embrace and advocate. In terms of learning a framework or native web APIs, which were previously abstracted for me, it takes about the same amount of time. However, in my opinion, there is a small cost, as native APIs tend to be more verbose and slightly more arduous. On the other hand, knowing the platform is an advantage for a developer because it is more future-proof. It's a trade-off, like most things in development.

## Hero section

Since Remix doesn't have an Image component like Next or Astro, I was compelled to use the native responsive image API. I wasn't successful in using _srcset_ on the native image element, as all images were being loaded regardless of the viewport width. This could have been due to a hydration issue or my improper use of it. I finally switched to using the Picture element, which worked flawlessly and allowed me to load the correct image for mobile, tablet, and desktop resolutions.<br>
It took some time to properly set up local font loading and compatibility with Tailwind. The documentation for the [links function](https://remix.run/docs/en/v1/route/links) in Remix is excellent, but I don't think it aligns well with the platform as they intent to do in general.
