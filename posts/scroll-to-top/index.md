---
title: 'Simple Scroll to Top Button'
date: '01-20-2022'
---

Creating a scroll to top button is easy with Svelte. Learn how I built a scroll to top button on my site with Svelte and Tailwind.

## Why build a scroll to top button

In this post I'll share my approach to creating a scroll to top button with Svelte. A scroll-to-top button is exactly what it sounds like. It's a button that when clicked scrolls the current page back to the top of the screen. It could be configured to scroll to different locations on the page, for example, different sections of a post, but we're going to focus on the scroll-to-top part only. On this site you should notice a circular button labeled with an up arrow appear if you scroll down the page. The button should transition in and out depending on your scroll position. This button is useful for blogs or sites with long blocks of text. Often a reader will want to scroll back to the top of the page, and if they're reading a long article on mobile, it can take a lot of finger power to scroll their way back to the top. The scroll-to-top button is a convenience feature that shows you're thinking about how a user would experience this scenario in real life.

## Where to put the button

We want the scroll to top button to be available on every page of our site, so we'll put it in the `__layout.svelte` route. The layout functions as a wrapper around every page route, so anything in the layout will be rendered on every page. Other things that make sense to put in your `__layout.svelte` file are a header and footer. The most important part of the layout is the `<slot />` component, which is the space where all of the other routes will be rendered. Here's an example of a layout file.

```
<!-- __layout.svelte --!>

<Header />

<!-- Insert button here --!>

<main>
    <slot />
<main>

<Footer />
```

On my site I've put the scroll to top button just under the header, though the location within the file doesn't really matter because we will be using fixed positioning, which places the element relative to the browser window.

## Creating the button

The first thing we'll do is create the button itself. I didn't bother creating a separate component because it's really just one button. We'll start with a plain old html button.

```
<button type="button">
&uarr;
</button>
```

To keep things single I used the unicode up arrow, but you could put anything you want in the button, a word, an emoji, an image, etc. Next, we'll use Tailwind CSS to style and position the button.

## Style and Position

### Fixed position

Let's first take care of the positioning. Add the Tailwind classes `fixed bottom-8 right-4` to the button. This will place the element 8rems from the bottom of the browser window and 4rems from the right of the window, which ends up placing the button in the bottom right corner of the window. You can adjust the positioning however you like. If for some reason you wanted your button to be in the top left corner you could use `fixed top-8 left-4`. Check the [Tailwind Docs](https://tailwindcss.com/docs/position) to learn more about positioning.

### Size and shape

I wanted my button to be perfectly round so I used the class `rounded-full` but you could experiment with other shapes by using some of the other border-radius classes. Let's also add `w-12 h-12` which will set the width and height of the button to 3rems. To make the button more responsive I used the size modifiers to adjust the size of the arrow depending on the size of the viewport. This is one of my favorite things about Tailwind, it's so much easier than writing media queries manually. This is what you should have so far.

```
<button type="button"
    class="fixed bottom-8 right-4 w-12 h-12 rounded-full text-2xl md:text-4xl">
        &uarr;
</button>
```

### Accessibility

Lets add a `span` with a class of `sr-only` to make the button more accessible. This will tell people using a screen reader that this is the scroll to top button, but it won't appear on the screen, so people not using a screen reader won't see it.

```
<button type="button"
    class="fixed bottom-8 right-4 w-12 h-12 rounded-full text-2xl md:text-4xl">
        <span class="sr-only">scroll to top</span>
            &uarr;
</button>
```

## Adding the functionality

Okay, so now our button is in the right place, but it doesn't do anything. Let's fix that. We'll add a function to the button using Svelte's `on:click` syntax.

```
<button on:click={scrollToTop} type="button"
    class="fixed bottom-8 right-4 w-12 h-12 rounded-full text-2xl md:text-4xl">
      <span class="sr-only">scroll to top</span>
            &uarr;
</button>
```

Now, at the top of `__layout.svelte` we'll create the scrollToTop function in the `<script>` tag. If you don't have a `<script>` tag at the top of your `__layout.svelte`, you can add one now. Here's what you should have.

```
<!-- __layout.svelte --!>

<script>
// scrollToTop function goes here
</script>

<Header />

<button on:click={scrollToTop} type="button"
    class="fixed bottom-8 right-4 w-12 h-12 rounded-full text-2xl md:text-4xl">
      <span class="sr-only">scroll to top</span>
            &uarr;
</button>

<main>
    <slot />
<main>

<Footer />
```

Svelte gives us direct access to the DOM, so we get to make use of all the standard Web APIs built into the browser. We'll use the [Window.scrollTo() API](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo). We can use x and y coordinates, or we can use some built in options. We'll choose the ladder. Referring to the documentation we see that the options are top, which specifies the number of pixels along the Y axis to scroll the window or element to, left, which specifies the number of pixels along the X axis to scroll the window or element to, and behavior, which specifies whether the scroll should animate smoothly (smooth) or jump instantly to the position (auto). Now we have all the information we need to create out scrollToTop function. We want to scroll to top (obviously), so we want the top value to be 0 and the left value to be 0. Those coordinates correspond to the top, left of the window, similar to the tailwind positioning classes we used earlier. Here's what our function looks like.

```
<script>
    function scrollToTop() {
        window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
        });
    }
</>
```

We already added the scrollToTop function to our button earlier, using the `on:click` syntax, so here's what our function button should look like.

```
<button on:click={scrollToTop} type="button"
    class="fixed bottom-8 right-4 w-12 h-12 rounded-full text-2xl md:text-4xl">
      <span class="sr-only">scroll to top</span>
            &uarr;
</button>
```

You should now have a working scroll to top button! Congrats! Not too shabby!

## Extras

We can take our scroll to top button to the next level by adding some transitions. We only want the button to appear when the user has scrolled a bit down the page. We don't need the button when the user is at the top of the page already, or if they're on a short page that doesn't allow them to scroll very far. Svelte makes it easy to add in this extra functionality. We'll use Svelte's built in [window bindings](https://svelte.dev/docs#template-syntax-svelte-window) to keep track of how far the user has scrolled. Add `<svelte:window bind:scrollY={y}/>` at the top of your `__layout.svelte` under the script tag. We also need to initialize the variable `y`, which will hold the y value of our scroll position.

```
<!-- __layout.svelte --!>

<script>
    let y;

    function scrollToTop() {
        window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
        });
    }
</script>

<svelte:window bind:scrollY={y}/>

<Header />

<button on:click={scrollToTop} type="button"
    class="fixed bottom-8 right-4 w-12 h-12 rounded-full text-2xl md:text-4xl">
      <span class="sr-only">scroll to top</span>
            &uarr;
</button>

<main>
    <slot />
<main>

<Footer />
```

Okay, great! Now we have our y scroll position being held in our y variable. We can use Svelte's `{#if}` blocks to make it so that the button only appears when the users scrolls a certain distance. Let's say we only want the button to show up if the user scrolls more than 500px down the page. We can easily implement this by adding an if block.

```
<!-- __layout.svelte --!>

<script>
    let y;

    function scrollToTop() {
        window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
        });
    }
</script>

<svelte:window bind:scrollY={y}/>

{#if y > 500}
<button on:click={scrollToTop} type="button"
    class="fixed bottom-8 right-4 w-12 h-12 rounded-full text-2xl md:text-4xl">
      <span class="sr-only">scroll to top</span>
            &uarr;
</button>
{/if}

```

### Transitions

The final thing we'll add is a transition so that the button doesn't appear and disappear so abruptly. Again, we'll use some of Svelte's built in functionality. In our script tag we'll `import { fade } from 'svelte/transition';`. Now, we can add the transition to our button.

```
{#if y > 500}
<button on:click={scrollToTop} type="button"
    class="fixed bottom-8 right-4 w-12 h-12 rounded-full text-2xl md:text-4xl"
    transition:fade="{{ duration: 500 }}">
      <span class="sr-only">scroll to top</span>
            &uarr;
</button>
{/if}

```

Check out the [Svelte documentation](https://svelte.dev/docs#run-time-svelte-transition) to learn more about the other built in transitions and parameters.

## Going further

I added some additional Tailwind classes to my button so that it would respond when hovered and work with dark mode. Here's my final button.

```
{#if y > 500}
<button on:click={scrollToTop} type="button"
    class="fixed bottom-8 right-4 w-12 h-12 rounded-full text-2xl md:text-4xl bg-dark dark:bg-light bg-opacity-10 backdrop-blur-md dark:bg-opacity-10 hover:transform hover:scale-110"
    transition:fade="{{ duration: 500 }}">
      <span class="sr-only">scroll to top</span>
            &uarr;
</button>
{/if}
```

Feel free to copy and paste if you like the way my button looks. Otherwise I would recommend experimenting with Tailwind and Svelte Transitions. It's easy to make clean UI interactions with the built in functionality, and I hope this helps demonstrate some of the possibilities.

If you discover any errors in my examples or have any suggestions on how this post could be improved please reach out to me! I'm working on adding commenting functionality to my posts but for now an [email](mailto:mary.haedrich@gmail.com) or [DM](https://twitter.com/marydotdev) will have to do! Thanks for reading!
