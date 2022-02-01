<script>
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';

    onMount(() => {
		isActive = true;		
	});
	
	let isActive;

</script>

<div class="py-2 px-2 mx-auto flex justify-center">
    <div class="max-w-xl flex flex-col justify-center gap-2 sm:gap-8 font-display text-center">
        {#if isActive}
        <h1 class="tracking-tighter text-3xl sm:text-4xl" 
        in:fade="{{delay: 500, duration: 1000}}">
          Hello, 
          <span in:fade="{{delay: 1000, duration: 1000}}">my name is</span> <br />
          <span class="text-5xl sm:text-6xl"
          in:fade="{{delay: 2000, duration: 1500}}">Mary Haedrich.</span>
        </h1>
        {:else}
        <div class="min-h-screen" />
        {/if}
    </div>
</div>
