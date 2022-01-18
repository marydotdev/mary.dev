---
title: Intro to Matter JS
date: 2022-01-08
---

Matter JS is an awesome 2D physics library. I used it to create the interactive wrecking ball on the home screen of my freshly redesigned website.

![matter-js](./matter-js.mp4)

---

## Creating a Post

All of your posts (including this one) are located in `/posts`. They are written in markdown and parsed with mdsvex. If you're unfamiliar with mdsvex, I would recommend [looking at the website](https://mdsvex.com/playground) to see what is all possible out of the box.

You can add a new post by creating either a new `.md` file or a folder with an `index.md` file:

```
/posts/my-first-post.md
/posts/my-first-post/index.md
```

## Rendering Posts

Each individual post is rendered at `src/routes/posts/[slug].svelte`. You'll notice the `load` function fetches the post by slug, and then dynamically imports the appropriate .md file.

There are some basic meta tags setup for SEO and social media sharing, including a generated open graph image (courtesy of [og-image.vercel.app](https://og-image.vercel.app)).

![open-graph](https://og-image.vercel.app/**Getting%20Started**?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg)

Feel free to customize this page as you see fit. I included some nice-to-haves like a table of contents and links to the next and/or previous posts.

---

## Fetching Posts

You should fetch posts by using the `/posts.json` endpoint in your pages. For anything server-side (such as other endpoints), you can use the `getPosts` function in `$lib/get-posts.js` as it will not work on the client (the endpoint is a wrapper over that function).

### Why doesn't `getPosts` work on the client?

`getPosts` fetches all posts and adds extra metadata (such as a preview and estimated reading time). In order to parse some of that metadata, it uses server-side only APIs. If you try to use `getPosts` on the client it will throw an error, advising you to fetch from the endpoint instead.

Hopefully I can find a way to make this function isomorphic. If you have an idea how, please reach out!

---

## Theme

Most of the site is themed using tailwind's [typography plugin](https://tailwindcss.com/docs/typography-plugin). You can the configuration for it in `tailwind.config.cjs`

For code blocks it uses a slightly modified Night Owl theme. You can change the theme by editing `src/prism.css`, or [replacing it with one of the many available themes](https://github.com/PrismJS/prism-themes/tree/master/themes).

```javascript
function helloWorld() {
  return 'Hello World'
}
```

---

## Mdsvex Plugins

I've added some mdsvex plugins to support a few extra things (check out the `mdsvex.config.js` file).

### Videos

.mp4 and .webm videos are supported

```md
![my video](/videos/my-cool-video.mp4)
```
