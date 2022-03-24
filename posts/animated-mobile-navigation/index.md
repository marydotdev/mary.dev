---
title: Animated mobile navigation menu with Svelte
date: 2022-01-15
coverImage: MobileNav.png
tags: Svelte, Mobile, UI/UX, Animation
published: true
---

Building a responsive mobile navigation menu is simple using Svelte's built-in animation tools. In this post, I'll walk you through how I built the responsive navigation bar on this site, and we'll focus on the mobile UI in particular.

It's 2022. Over half of all internet users browse the web on a mobile device [source](https://www.statista.com/statistics/277125/share-of-website-traffic-coming-from-mobile-devices/#:~:text=Mobile%20accounts%20for%20approximately%20half,consistently%20surpassing%20it%20in%202020.). Most people interact with websites on their phones, which is why it's important to practice mobile-first responsive web design. If you're new to this subject or are interested in learning more I would recommend checking out [web.dev](https://web.dev/), Google's resource for all things web development. They produce incredible content (I mean, they are Google) and focus on making it easy for developers to create fast, performant experiences for their users. A few of the developers from the web.dev team that I follow (and would recommend you follow if you're interested in this stuff) are [Una Kravets](https://twitter.com/Una), [Adam Argyle](https://twitter.com/argyleink), and [Addy Osmani](https://twitter.com/addyosmani).

## Navigation and Mobile Menus

Implementing a responsive navigation menu can be challenging for newer developers. There are several approaches. The first is to create one navigation component that will work on both small and large screens. This is the easiest solution but it's limiting. The second approach is to create two separate navigation components, one that will be shown on desktop-sized screens, and another that will be displayed on mobile. This is the approach that most people take and the one we'll be covering in this post.
Here's a video demonstrating what I mean. When the viewport is greater than 640px wide (the Tailwind small breakpoint), the full navbar is visible, but as soon as the viewport is below the threshold the full navbar disappears and the hamburger menu (the technical terms for the three lines) appears.

![responsive nav](./responsive-nav.mp4)

I'm sure there are countless ways to implement this functionality, so if you have a better way or suggestions on how I could improve my implementation please feel free to reach out and let me know so I can update this post!

## Project Structure

### Heading Component

I created a Header component and a MobileNav component. The Header component contains both the desktop nav and the MobileNav component. Here's what my Header component looks like:

```svelte
<!-- Header.svelte --!>

<script>
    import { HomeIcon, UserIcon, Edit2Icon, ZapIcon } from 'svelte-feather-icons';
    import ThemeToggle from './ThemeToggle.svelte';
    import MobileNav from './MobileNav.svelte';
    import Tooltip from './Tooltip.svelte';

</script>

<nav class="sticky z-50 top-0 mb-4 sm:mb-12 max-w-7xl pt-6 px-6 pb-4 mx-auto w-full bg-light text-dark dark:bg-dark dark:text-light backdrop-filter backdrop-blur-lg bg-opacity-60 dark:backdrop-filter dark:backdrop-blur-lg dark:bg-opacity-60">
    <div class="flex justify-between items-start">
        <div class="flex justify-start">
            <a href="/" class="font-display font-medium tracking-tight text-2xl md:text-3xl">
                mary.dev
            </a>
        </div>

        <div class="hidden sm:flex justify-around items-center gap-8 max-w-2xl px-4 py-2 rounded-lg bg-dark/10 dark:bg-light/10">
        <!-- Desktop view --!>
          <Tooltip title="Home">
            <a href="/" class="hidden sm:block hover:transform hover:scale-110 transition ease-out duration-300">
              <div class="hidden sm:block bg-light dark:bg-dark p-2 rounded-lg">
                    <HomeIcon size="2x" />
              </div>
            </a>
          </Tooltip>
        <!-- The rest of the menu items go here --!>
        </div>

    <div class="flex justify-end">
      <div class="hidden sm:block">
          <ThemeToggle />
      </div>

    <!-- Mobile view --!>
      <MobileNav />
    </div>
  </div>
</nav>
```

Note: I removed the About, Blog, Etc to save space and make the code easier to read. If you're using this code just repeat the 'Home' item example and replace it with the menu items you're using.

There are two additional components in my Header that I haven't mentioned, the Tooltip and the ThemeToggle. We can ignore the Tooltip (that's how I'm displaying the navigation item labels when the items are hovered). The ThemeToggle is a separate component that contains the dark mode toggle. I found it helpful to put the theme toggle functionality in its own component so that I could use it in multiple places, but that's completely optional and a subject for another post. As always, feel free to use any of the code I've posted.

### Mobile Nav Component

Next, we'll look at the MobileNav component.

```svelte
<script>
  import { MenuIcon, XIcon, HomeIcon, UserIcon, Edit2Icon, ZapIcon } from 'svelte-feather-icons'
  import { fade, fly } from 'svelte/transition'
  import { quintIn } from 'svelte/easing'
  import ThemeToggle from './ThemeToggle.svelte'

  let isOpen = false
  let isMenuRendered
  $: {
    if (isOpen) {
      setTimeout(() => {
        isMenuRendered = true
      }, 20)
    } else {
      setTimeout(() => {
        isMenuRendered = false
      }, 300)
    }
  }
</script>

<div class="sm:hidden">
  <button aria-label="Toggle menu" type="button" on:click={() => (isOpen = !isOpen)}>
    {#if !isOpen}
      <MenuIcon size="1.5x" />
    {:else}
      <XIcon size="1.5x" />
    {/if}
  </button>

  {#if isOpen}
    <div
      class="absolute left-0 flex h-screen w-full flex-col bg-light px-4 dark:bg-dark"
      in:fade={{ delay: 0, duration: 400, opacity: 0 }}
      out:fade={{ delay: 500, duration: 400, opacity: 0 }}
    >
      <ul class="flex flex-col justify-center gap-2 py-12" class:menuRendered={isMenuRendered}>
        <li
          class="font-regular font-display text-dark dark:text-light"
          style="transition-delay: 150ms;"
        >
          <a
            class="flex w-auto items-center justify-start gap-4 py-4 px-2"
            on:click={() => setTimeout(() => (isOpen = false), 200)}
            in:fly={{ delay: 500, duration: 300, x: 0, y: -300, opacity: 0, easing: quintIn }}
            out:fly={{ delay: 100, duration: 300, x: 0, y: -300, opacity: 0, easing: quintIn }}
            href="/"
          >
            <div class="rounded-lg border-2 border-zinc-700 p-2 dark:border-zinc-100">
              <HomeIcon size="1.5x" />
            </div>
            <span class="text-3xl">Home</span>
          </a>
        </li>

        <li
          class="font-regular font-display text-dark dark:text-light"
          style="transition-delay: 350ms;"
        >
          <a
            class="flex w-auto items-center justify-start gap-4 py-4 px-2"
            on:click={() => setTimeout(() => (isOpen = false), 200)}
            in:fly={{ delay: 400, duration: 300, x: 0, y: -300, opacity: 0, easing: quintIn }}
            out:fly={{ delay: 200, duration: 300, x: 0, y: -300, opacity: 0, easing: quintIn }}
            href="/about"
          >
            <div class="rounded-lg border-2 border-zinc-700 p-2 dark:border-zinc-100">
              <UserIcon size="1.5x" />
            </div>
            <span class="text-3xl">About</span>
          </a>
        </li>

        <li
          class="font-regular font-display text-dark dark:text-light"
          style="transition-delay: 250ms;"
        >
          <a
            class="flex w-auto items-center justify-start gap-4 py-4 px-2"
            on:click={() => setTimeout(() => (isOpen = false), 200)}
            in:fly={{ delay: 300, duration: 300, x: 0, y: -300, opacity: 0, easing: quintIn }}
            out:fly={{ delay: 300, duration: 300, x: 0, y: -300, opacity: 0, easing: quintIn }}
            href="/posts"
          >
            <div class="rounded-lg border-2 border-zinc-700 p-2 dark:border-zinc-100">
              <Edit2Icon size="1.5x" />
            </div>
            <span class="text-3xl">Blog</span>
          </a>
        </li>

        <li
          class="font-regular font-display text-dark dark:text-light"
          style="transition-delay: 250ms;"
        >
          <a
            class="flex w-auto items-center justify-start gap-4 py-4 px-2"
            on:click={() => setTimeout(() => (isOpen = false), 200)}
            in:fly={{ delay: 200, duration: 300, x: 0, y: -300, opacity: 0, easing: quintIn }}
            out:fly={{ delay: 400, duration: 300, x: 0, y: -300, opacity: 0, easing: quintIn }}
            href="/projects"
          >
            <div class="rounded-lg border-2 border-zinc-700 p-2 dark:border-zinc-100">
              <ZapIcon size="1.5x" />
            </div>
            <span class="text-3xl">Projects</span>
          </a>
        </li>

        <li
          class="font-regular font-display text-dark dark:text-light"
          style="transition-delay: 250ms;"
        >
          <a
            class="flex w-auto items-center justify-start gap-4 py-4 px-2"
            on:click={() => setTimeout(() => (isOpen = false), 200)}
            in:fly={{ delay: 250, duration: 300, x: 0, y: -300, opacity: 0, easing: quintIn }}
            out:fly={{ delay: 450, duration: 300, x: 0, y: -300, opacity: 0, easing: quintIn }}
            href="/lets-jam"
          >
            <div class="rounded-lg border-2 border-zinc-700 p-2 dark:border-zinc-100">
              <svg
                width="25"
                height="25"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 25V7.5C24 6.219 24.5 4 27 4C29.5 4 30 6.219 30 7.5V30L37 23C38.297 21.703 40.078 21.078 41.5 22.5C42.922 23.922 43.094 25.406 41.5 27L35 33.5C35 33.5 29.094 44 26 44H13C13 44 10 44 8 42C6 40 6 37.5 6 37.5V12.781C6 12.062 6.5 10 9 10C11.5 10 12 12 12 12.781V25"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18 22C18 20.3431 16.6569 19 15 19C13.3431 19 12 20.3431 12 22V28C12 29.6569 13.3431 31 15 31C16.6569 31 18 29.6569 18 28V22Z"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linejoin="round"
                />
                <path
                  d="M24 22C24 20.3431 22.6569 19 21 19C19.3431 19 18 20.3431 18 22V28C18 29.6569 19.3431 31 21 31C22.6569 31 24 29.6569 24 28V22Z"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span class="text-3xl">Let's Jam</span>
          </a>
        </li>

        <li
          class="font-regular font-display text-dark dark:text-light"
          style="transition-delay: 250ms;"
        >
          <div
            class="flex w-auto items-center justify-start gap-4 py-4 px-2"
            on:click={() => setTimeout(() => (isOpen = false), 200)}
            in:fly={{ delay: 100, duration: 300, x: 0, y: -300, opacity: 0, easing: quintIn }}
            out:fly={{ delay: 500, duration: 300, x: 0, y: -300, opacity: 0, easing: quintIn }}
          >
            <div class="rounded-lg border-2 border-zinc-700 p-2 dark:border-zinc-100">
              <ThemeToggle />
            </div>
            <span class="text-3xl">Toggle Theme</span>
          </div>
        </li>
      </ul>
    </div>
  {/if}
</div>
```

Don't freak out! I know it looks like a lot but let's break it down. The first important thing to notice is that again we have our ThemeToggle component which gives us the ability to toggle dark mode from within our mobile nav. The other important things are the imports from `svelte/transition` and `svelte/easing`. We'll use these to add animation to our menu. Here's what the finished example looks like.

![mobile nav](./mobile-nav.mp4)

There is a div with a class of `sm:hidden` wrapped around the rest of the component. This is crucial! This is Tailwind's way of saying if the viewport is 640px or greater, hide whatever is in this div. That means it will only display on screens with a viewport of 639px or smaller which is exactly what we want. If you refer back to the Header component you'll see a div around the "desktop view" menu items with a class of `hidden sm:flex`. This is basically doing the opposite of what we're doing in the MobileNav component. We're saying let's hide whatever is in this div on screens sized 0px-639px, then `display: flex` for screens larger than 640px. You'll see a similar pattern around the ThemeToggle.

## Transitions

In my opinion, the transitions are the most important and interesting part of this mobile menu. Instead of just flashing open each menu item nicely animates itself into the viewport, one after the other. Same thing when the menu is closed. This makes the UI feel a bit more custom and adds a bit of personality to the experience, however subtle.

There are two types of transitions being used: fade and fly. Fade is used on the "background" of the menu.

### Fade

```svelte
<div class="flex flex-col ..."
	in:fade="{{delay: 0, duration: 400, opacity: 0}}"
	out:fade="{{delay: 500, duration: 400, opacity: 0}}">
    <ul>
    <!-- list items --!>
    </ul>
</div>
```

In Svelte, were able to define both the entrance and exit of each transition. If we wanted the behavior to be the same for both entrance and exit we could just use `transition:fade="{{params}}"`. On the entrance we want the fade transition to start immediately and last for 400ms. On the exit, we want to wait 500ms and then start our transition out that lasts for 400ms. We add the delay on the exit so that the menu items have time to start transitioning out before the background transitions.

### Fly

The fly transition is used on each individual list item. This is how we get the staggered effect on the entrance and exit of each item. Here's a simplified version of each list item.

```svelte
<li>
  <a
    class="..."
    in:fly={{ delay: 500, duration: 300, x: 0, y: -300, opacity: 0, easing: quintIn }}
    out:fly={{ delay: 100, duration: 300, x: 0, y: -300, opacity: 0, easing: quintIn }}
  >
    <span class="text-3xl">Home</span>
  </a>
</li>
```

The delay of each item depends on its position in the list. We want the last item to be the first in and the last out. So we want the first item to be the last in and the first out. Let's look at an abbreviated example of just the delay and duration with three list items.

```svelte
<li>
  <a class="..." in:fly={{ delay: 300, duration: 300 }} out:fly={{ delay: 100, duration: 300 }}>
    Home
  </a>
</li>

<li>
  <a class="..." in:fly={{ delay: 200, duration: 300 }} out:fly={{ delay: 200, duration: 300 }}>
    About
  </a>
</li>

<li>
  <a class="..." in:fly={{ delay: 100, duration: 300 }} out:fly={{ delay: 300, duration: 300 }}>
    Blog
  </a>
</li>
```

Notice the duration is the same for every item, this helps create a more cohesive animation that feels right. On the way in we want the LAST item to go FIRST. It's hard to think about time going backward (at least for me), so when writing animations like this I like to start at the end and work my way back up. That means I started by saying I want the last item (Blog in this case) to enter first after a short delay of 100ms, so I'll start there. Then I'll go to the next item up (About) and say "Okay, now I want this one to be delayed another 100ms after the first one", so I'll add another 100ms to the delay, giving me a delay of 200ms. And so on and so on. Once you have the entrance delays worked out for your specific case, all you need to do is switch the order for the exit transitions.

The reason we're going backwards is because the items are flying in from the top and moving DOWN the screen.

The fly transition accepts not only the delay, duration, and opacity params, but also an x, y, and easing parameter. Since we only want to move the items vertically, we don't need to touch the x param and can leave it set to 0. For the y parameter, we'll use the same value, -300. The easiest way to figure out what value to use is to experiment with different values. A negative y value will appear to enter from the top of the screen, while a positive value will enter from the bottom of the screen.

## Easing

The final part of our animation is the easing param. Easing functions specify the rate of change over time and make it easy to add a more lifelike feel to your transitions. Easing curves are a large topic to get into, but there are a ton of great resources that explain how they work better than I could. I would recommend starting with the [Svelte Easing](https://svelte.dev/docs#run-time-svelte-easing) documentation. There's also a great [ease visualizer](https://svelte.dev/examples/easing) in the examples. Another phenomenal resource is Josh W Comeau's blog, in particular [this article](https://www.joshwcomeau.com/animation/css-transitions/) on CSS transitions and timing functions.

If you made it this far I hope this post has inspired you to experiment with Svelte Transitions!

If you discover any errors in my examples or have any suggestions on how this post could be improved please reach out to me! I'm working on adding commenting functionality to my posts but for now, an [email](mailto:mary.haedrich@gmail.com) or [DM](https://twitter.com/marydotdev) will have to do! Thanks for reading!
