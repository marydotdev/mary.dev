<script>
    import { MenuIcon, XIcon, HomeIcon, UserIcon, Edit2Icon, ZapIcon } from 'svelte-feather-icons';
	import { fade, fly } from 'svelte/transition';
	import { quintIn } from 'svelte/easing';
	import ThemeToggle from './ThemeToggle.svelte';

	
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

<div class="sm:hidden">
	<button
		aria-label="Toggle menu"
		type="button"
		on:click={() => (isOpen = !isOpen)}>
		{#if !isOpen}
			<MenuIcon size="1.5x" />
		{:else}
			<XIcon size="1.5x" />
		{/if}
	</button>

	{#if isOpen}

	<div class="flex flex-col absolute left-0 px-4 w-full h-screen bg-light dark:bg-dark"
		in:fade="{{delay: 0, duration: 400, opacity: 0}}"
		out:fade="{{delay: 500, duration: 400, opacity: 0}}">
		<ul
			class="flex flex-col justify-center gap-2 py-12"
			class:menuRendered={isMenuRendered}>
			<li
				class="text-dark dark:text-light font-regular font-display"
				style="transition-delay: 150ms;">
				<a class="flex justify-start items-center gap-4 w-auto py-4 px-2" 
				on:click={() => setTimeout(() => isOpen = false, 200)}
				in:fly="{{delay: 500, duration: 300, x: 0, y: -300, opacity: 0, easing: quintIn}}"
				out:fly="{{delay: 100, duration: 300, x: 0, y: -300, opacity: 0, easing: quintIn}}"
				href="/">
				<div class="p-2 border-2 rounded-lg border-zinc-700 dark:border-zinc-100">
					<HomeIcon size="1.5x" />
				</div>
					<span class="text-3xl">Home</span>
				</a>
			</li>
			
			<li
				class="text-dark dark:text-light font-regular font-display"
				style="transition-delay: 350ms;">
				<a class="flex justify-start items-center gap-4 w-auto py-4 px-2" 
				on:click={() => setTimeout(() => isOpen = false, 200)} 
				in:fly="{{delay: 400, duration: 300, x: 0, y: -300, opacity: 0, easing: quintIn}}"
				out:fly="{{delay: 200, duration: 300, x: 0, y: -300, opacity: 0, easing: quintIn}}"
				href="/about">
				<div class="p-2 border-2 rounded-lg border-zinc-700 dark:border-zinc-100">
					<UserIcon size="1.5x" />
				</div>
					<span class="text-3xl">About</span>
				</a>
			</li>

			<li
				class="text-dark dark:text-light font-regular font-display"
				style="transition-delay: 250ms;">
				<a class="flex justify-start items-center gap-4 w-auto py-4 px-2" 
				on:click={() => setTimeout(() => isOpen = false, 200)} 
				in:fly="{{delay: 300, duration: 300, x: 0, y: -300, opacity: 0, easing: quintIn}}"
				out:fly="{{delay: 300, duration: 300, x: 0, y: -300, opacity: 0, easing: quintIn}}"
				href="/posts">
				<div class="p-2 border-2 rounded-lg border-zinc-700 dark:border-zinc-100">
					<Edit2Icon size="1.5x" />
				</div>
					<span class="text-3xl">Blog</span>
				</a>
			</li>

			<li
				class="text-dark dark:text-light font-regular font-display"
				style="transition-delay: 250ms;">
				<a class="flex justify-start items-center gap-4 w-auto py-4 px-2" 
				on:click={() => setTimeout(() => isOpen = false, 200)} 
				in:fly="{{delay: 200, duration: 300, x: 0, y: -300, opacity: 0, easing: quintIn}}"
				out:fly="{{delay: 400, duration: 300, x: 0, y: -300, opacity: 0, easing: quintIn}}"
				href="/projects">
				<div class="p-2 border-2 rounded-lg border-zinc-700 dark:border-zinc-100">
					<ZapIcon size="1.5x" />
				</div>
					<span class="text-3xl">Projects</span>
				</a>
			</li>

			<li
				class="text-dark dark:text-light font-regular font-display"
				style="transition-delay: 250ms;">
				<a class="flex justify-start items-center gap-4 w-auto py-4 px-2" 
				on:click={() => setTimeout(() => isOpen = false, 200)} 
				in:fly="{{delay: 250, duration: 300, x: 0, y: -300, opacity: 0, easing: quintIn}}"
				out:fly="{{delay: 450, duration: 300, x: 0, y: -300, opacity: 0, easing: quintIn}}"
				href="/lets-jam">
				<div class="p-2 border-2 rounded-lg border-zinc-700 dark:border-zinc-100">
					<svg width="25" height="25" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M24 25V7.5C24 6.219 24.5 4 27 4C29.5 4 30 6.219 30 7.5V30L37 23C38.297 21.703 40.078 21.078 41.5 22.5C42.922 23.922 43.094 25.406 41.5 27L35 33.5C35 33.5 29.094 44 26 44H13C13 44 10 44 8 42C6 40 6 37.5 6 37.5V12.781C6 12.062 6.5 10 9 10C11.5 10 12 12 12 12.781V25" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M18 22C18 20.3431 16.6569 19 15 19C13.3431 19 12 20.3431 12 22V28C12 29.6569 13.3431 31 15 31C16.6569 31 18 29.6569 18 28V22Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
						<path d="M24 22C24 20.3431 22.6569 19 21 19C19.3431 19 18 20.3431 18 22V28C18 29.6569 19.3431 31 21 31C22.6569 31 24 29.6569 24 28V22Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
					</svg>
				</div>
					<span class="text-3xl">Let's Jam</span>
				</a>
			</li>

			<li
				class="text-dark dark:text-light font-regular font-display"
				style="transition-delay: 250ms;">
				<div class="flex justify-start items-center gap-4 w-auto py-4 px-2" 
				on:click={() => setTimeout(() => isOpen = false, 200)} 
				in:fly="{{delay: 100, duration: 300, x: 0, y: -300, opacity: 0, easing: quintIn}}"
				out:fly="{{delay: 500, duration: 300, x: 0, y: -300, opacity: 0, easing: quintIn}}">
				<div class="p-2 border-2 rounded-lg border-zinc-700 dark:border-zinc-100">
					<ThemeToggle />
				</div>
					<span class="text-3xl">Toggle Theme</span>
			</div>
			</li>
		</ul>
	</div>
	{/if}
</div>
