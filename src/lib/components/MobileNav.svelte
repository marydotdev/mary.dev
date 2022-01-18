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
