<script>
	export let title = '';
	let isHovered = false;
	let x;
	let y;
	
	function mouseOver(event) {
		isHovered = true;
		x = event.clientX - 30;
		y = event.clientY + 30;
	}
	function mouseMove(event) {
		x = event.clientX - 30;
		y = event.clientY + 30;
	}
	function mouseLeave() {
		isHovered = false;
	}
</script>

<div
	on:mouseover={mouseOver}
  on:mouseleave={mouseLeave}
	on:mousemove={mouseMove}>
	<slot />
</div>

{#if isHovered}
	<div style="top: {y}px; left: {x}px;" 
    class="absolute bg-dark/70 text-light dark:bg-light/70 dark:text-dark px-2 py-1 rounded-lg font-display font-medium">{title}</div>
{/if}
