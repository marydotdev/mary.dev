---
title: What is a Full Stack Developer
date: 2022-04-12
coverImage:
tags: career
published: false
---

A scroll-to-top button is exactly what it sounds like. It's a button that when clicked scrolls the current page back to the top of the screen. It could be configured to scroll to different locations on the page, for example, different sections of a post, but we're going to focus on the scroll-to-top part only.

On this site, you should notice a circular button labeled with an up arrow appear if you scroll down the page. The button should transition in and out depending on your scroll position. This button is useful for blogs or sites with long blocks of text. Often a reader will want to scroll back to the top of the page, and if they're reading a long article on mobile, it can take a lot of finger power to scroll their way back to the top. The scroll-to-top button is a convenience feature that shows you're thinking about how a user would experience this scenario in real life.

## Where to put the button

We want the scroll to top button to be available on every page of our site, so we'll put it in the `__layout.svelte` route. The layout functions as a wrapper around every page route, so anything in the layout will be rendered on every page. Other things that make sense to put in your `__layout.svelte` file are a header and footer. The most important part of the layout is the `<slot />` component, which is the space where all of the other routes will be rendered. Here's an example of a layout file.
