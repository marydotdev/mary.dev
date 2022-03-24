<script>
	import {Icon} from '@steeze-ui/svelte-icon'
    import {Menu, X} from '@steeze-ui/heroicons'
	import {Home, User, Pencil, LightningBolt} from '@steeze-ui/heroicons'
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

<div class="z-30 pr-2 md:hidden">
	<button
		aria-label="Toggle menu"
		type="button"
		class="bg-light dark:bg-dark w-full rounded-full p-2"
		on:click={() => (isOpen = !isOpen)}>
		{#if !isOpen}
		<Icon src={Menu} theme='solid' size="28" class="relative text-dark/90 dark:text-light/90" />
		{:else}
		<Icon src={X} theme='solid' size="28" class="relative text-dark/90 dark:text-light/90" />
		{/if}
	</button>

	{#if isOpen}

	<div class="flex flex-col absolute left-0 px-4 w-full h-screen bg-light dark:bg-dark">
		<ul
			class="flex flex-col items-start pt-12 font-medium"
			class:menuRendered={isMenuRendered}>
			<li
				class="text-dark dark:text-light">
				<a class="flex justify-center items-center gap-4 w-auto py-4 px-2" 
				on:click={() => setTimeout(() => isOpen = false, 200)}
				href="/">
					<Icon src={Home} theme='outline' size="24" class="relative" />
					<p class="text-xl">Home</p>
				</a>
			</li>
			
			<li
				class="text-dark dark:text-light">
				<a class="flex justify-center items-center gap-4 w-auto py-4 px-2" 
				on:click={() => setTimeout(() => isOpen = false, 200)} 
				href="/about">
					<Icon src={User} theme='outline' size="24" class="relative" />
					<p class="text-xl">About</p>
				</a>
			</li>

			<li
				class="text-dark dark:text-light">
				<a class="flex justify-center items-center gap-4 w-auto py-4 px-2" 
				on:click={() => setTimeout(() => isOpen = false, 200)}
				href="/blog">
					<Icon src={Pencil} theme='outline' size="24" class="relative" />
					<p class="text-xl">Blog</p>
				</a>
			</li>

			<li
				class="text-dark dark:text-light">
				<a class="flex justify-center items-center gap-4 w-auto py-4 px-2"
				on:click={() => setTimeout(() => isOpen = false, 200)} 
				href="/work">
					<Icon src={LightningBolt} theme='outline' size="24" class="relative" />
					<p class="text-xl">Work</p>
				</a>
			</li>

			<li
				class="text-dark dark:text-light">
				<div class="flex justify-center items-center gap-4 w-auto py-4 px-2"
				on:click={() => setTimeout(() => isOpen = false, 200)}>
				<div class="text-xl">
					<ThemeToggle />
				</div>
			</div>
			</li>
		</ul>
	</div>
	{/if}
</div>
