<script>
	import {Icon} from '@steeze-ui/svelte-icon'
    import {AcademicCap, Code, Link, Mail, Menu, X} from '@steeze-ui/heroicons'
	import {Home, User, Pencil, LightningBolt} from '@steeze-ui/heroicons'
	import ThemeToggle from './ThemeToggle.svelte';
	import { fade, fly } from "svelte/transition";
	import { cubicIn, linear, quintOut } from 'svelte/easing';

	
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

<div class="z-30 sm:hidden">
	<button
		aria-label="Toggle menu"
		type="button"
		class="pr-4 pt-2"
		on:click={() => (isOpen = !isOpen)}>
		{#if !isOpen}
		<Icon src={Menu} theme='solid' size="24" class="relative text-dark dark:text-light" />
		{:else}
		<Icon src={X} theme='solid' size="24" class="relative text-dark dark:text-light" />
		{/if}
	</button>

	{#if isOpen}

	<div class="flex flex-col absolute left-0 mt-2 px-4 w-full h-screen bg-light dark:bg-dark"
		in:fly="{{delay: 0, duration: 500, x: 0, y: 500, opacity: 1, easing: quintOut}}"
		out:fly="{{delay: 0, duration: 400, x: 0, y: 600, opacity: 1, easing: cubicIn}}">
		<ul class="grid grid-cols-2 place-items-center pt-16 px-8 gap-y-8 text-lg font-medium"
			class:menuRendered={isMenuRendered}>
			<li class="relative flex flex-col items-center gap-4">
				<a href="/" 
				class="relative block rounded-md"
				on:click={() => setTimeout(() => isOpen = false, 200)}
				>
					<div class="absolute inset-0 bg-gradient-to-br from-pink-400 to-red-500 rounded-lg blur opacity-80" />
					<div class="w-fit relative flex flex-col justify-center items-center gap-2 px-6 py-5 rounded-xl bg-dark/10 dark:bg-light/10">
						<Icon src={Home} theme='outline' size="30" class="relative text-dark dark:text-light" />
					</div>
				</a>
				
				<a href="/">Home</a>
			</li>
			
			<li class="relative flex flex-col items-center gap-4">
				<a href="/about" 
				class="relative block rounded-md"
				on:click={() => setTimeout(() => isOpen = false, 200)}>
					<div class="absolute inset-0 bg-gradient-to-br from-orange-300 to-orange-500 rounded-lg blur opacity-80" />
					<div class="w-fit relative flex flex-col justify-center items-center gap-2 px-6 py-5 rounded-xl bg-dark/10 dark:bg-light/10">
						<Icon src={User} theme='outline' size="30" class="relative text-dark dark:text-light" />
					</div>
				</a>
				
				<a href="/about">About</a>
			</li>

			<li class="relative flex flex-col items-center gap-4">
				<a href="/blog" 
				class="relative block rounded-md"
				on:click={() => setTimeout(() => isOpen = false, 200)}>
					<div class="absolute inset-0 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-lg blur opacity-80" />
					<div class="w-fit relative flex flex-col justify-center items-center gap-2 px-6 py-5 rounded-xl bg-dark/10 dark:bg-light/10">
						<Icon src={Pencil} theme='outline' size="30" class="relative text-dark dark:text-light" />
					</div>
				</a>
				
				<a href="/blog">Blog</a>
			</li>

			<li class="relative flex flex-col items-center gap-4">
				<a href="/projects" 
				class="relative block rounded-md"
				on:click={() => setTimeout(() => isOpen = false, 200)}>
					<div class="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg blur opacity-80" />
					<div class="w-fit relative flex flex-col justify-center items-center gap-2 px-6 py-5 rounded-xl bg-dark/10 dark:bg-light/10">
						<Icon src={LightningBolt} theme='outline' size="30" class="relative text-dark dark:text-light" />
					</div>
				</a>
				
				<a href="/projects">Projects</a>
			</li>

			<!-- <li class="relative flex flex-col items-center gap-4">
				<a href="/links" 
				class="relative block rounded-md"
				on:click={() => setTimeout(() => isOpen = false, 200)}>
					<div class="absolute inset-0 bg-gradient-to-br from-blue-300 to-sky-400 dark:from-blue-500 dark:to-sky-500 rounded-lg blur opacity-80" />
					<div class="w-fit relative flex flex-col justify-center items-center gap-2 px-6 py-5 rounded-xl bg-dark/10 dark:bg-light/10">
						<Icon src={Link} theme='outline' size="30" class="relative text-dark dark:text-light" />
					</div>
				</a>
				
				<a href="/links">Links</a>
			</li>

			<li class="relative flex flex-col items-center gap-4">
				<a href="/contact" 
				class="relative block rounded-md"
				on:click={() => setTimeout(() => isOpen = false, 200)}>
					<div class="absolute inset-0 bg-gradient-to-br from-indigo-300 to-indigo-500 dark:from-indigo-400 dark:to-indigo-700 rounded-lg blur opacity-80" />
					<div class="w-fit relative flex flex-col justify-center items-center gap-2 px-6 py-5 rounded-xl bg-dark/10 dark:bg-light/10">
						<Icon src={Mail} theme='outline' size="30" class="relative text-dark dark:text-light" />
					</div>
				</a>
				
				<a href="/contact">Contact</a>
			</li> -->
		</ul>
		<div class="flex justify-center items-center gap-4 w-auto pt-12 px-2">
			<ThemeToggle />
		</div>
	</div>
	{/if}
</div>
