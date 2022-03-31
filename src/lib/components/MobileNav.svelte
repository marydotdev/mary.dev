<script>
	import {Icon} from '@steeze-ui/svelte-icon'
    import {Menu, X} from '@steeze-ui/heroicons'
	import {Home, User, Pencil, LightningBolt} from '@steeze-ui/heroicons'
	import ThemeToggle from './ThemeToggle.svelte';
	import { fly } from "svelte/transition";
	import { quintOut } from 'svelte/easing';

	
	let isOpen = false;
	let isMenuRendered
	$: {
		if (isOpen) {
			setTimeout(() => {
				isMenuRendered = true;
			}, 20);
			
		} else {
			setTimeout(() => {
				isMenuRendered = false;
			}, 300);
		}
	}
</script>

<div class="z-30 pr-2 md:hidden">
	<button
		aria-label="Toggle menu"
		type="button"
		class="bg-light dark:bg-dark w-full rounded-full p-2"
		on:click={() => (isOpen = !isOpen)}>
		{#if !isOpen}
		<Icon src={Menu} theme='solid' size="24" class="relative text-dark/90 dark:text-light/90" />
		{:else}
		<Icon src={X} theme='solid' size="24" class="relative text-dark/90 dark:text-light/90" />
		{/if}
	</button>

	{#if isOpen}

	<div class="flex flex-col absolute left-0 px-4 w-full h-screen bg-light dark:bg-dark"
	in:fly="{{delay: 150, duration: 400, x: 0, y: 800, opacity: 100, easing: quintOut}}"
	out:fly="{{delay: 450, duration: 500, x: 0, y: 800, opacity: 100, easing: quintOut}}">
		<ul
			class="flex flex-col items-start pt-12 font-medium"
			class:menuRendered={isMenuRendered}>
			<li
				class="text-dark dark:text-light">
				<a class="flex justify-center items-center gap-4 w-auto py-4 px-2" 
				on:click={() => setTimeout(() => isOpen = false, 200)}
				href="/"
				in:fly="{{delay: 300, duration: 400, x: 400, y: 0, opacity: 0, easing: quintOut}}"
				out:fly="{{delay: 400, duration: 500, x: 0, y: 400, opacity: 0, easing: quintOut}}"
				>
					<Icon src={Home} theme='outline' size="24" class="relative" />
					<p class="text-2xl">Home</p>
				</a>
			</li>
			
			<li
				class="text-dark dark:text-light">
				<a class="flex justify-center items-center gap-4 w-auto py-4 px-2" 
				on:click={() => setTimeout(() => isOpen = false, 200)} 
				href="/about"
				in:fly="{{delay: 350, duration: 400, x: 400, y: 0, opacity: 0, easing: quintOut}}"
				out:fly="{{delay: 350, duration: 500, x: 0, y: 400, opacity: 0, easing: quintOut}}">
					<Icon src={User} theme='outline' size="24" class="relative" />
					<p class="text-2xl">About</p>
				</a>
			</li>

			<li
				class="text-dark dark:text-light">
				<a class="flex justify-center items-center gap-4 w-auto py-4 px-2" 
				on:click={() => setTimeout(() => isOpen = false, 200)}
				href="/blog"
				in:fly="{{delay: 400, duration: 400, x: 400, y: 0, opacity: 0, easing: quintOut}}"
				out:fly="{{delay: 300, duration: 500, x: 0, y: 400, opacity: 0, easing: quintOut}}">
					<Icon src={Pencil} theme='outline' size="24" class="relative" />
					<p class="text-2xl">Blog</p>
				</a>
			</li>

			<li
				class="text-dark dark:text-light">
				<a class="flex justify-center items-center gap-4 w-auto py-4 px-2"
				on:click={() => setTimeout(() => isOpen = false, 200)} 
				href="/work"
				in:fly="{{delay: 450, duration: 400, x: 400, y: 0, opacity: 0, easing: quintOut}}"
				out:fly="{{delay: 250, duration: 500, x: 0, y: 400, opacity: 0, easing: quintOut}}">
					<Icon src={LightningBolt} theme='outline' size="24" class="relative" />
					<p class="text-2xl">Work</p>
				</a>
			</li>

			<li
				class="text-dark dark:text-light">
				<div class="flex justify-center items-center gap-4 w-auto py-4 px-2"
				in:fly="{{delay: 500, duration: 400, x: 400, y: 0, opacity: 0, easing: quintOut}}"
				out:fly="{{delay: 200, duration: 500, x: 0, y: 400, opacity: 0, easing: quintOut}}">
				<div class="text-2xl">
					<ThemeToggle />
				</div>
			</div>
			</li>
		</ul>
	</div>
	{/if}
</div>
