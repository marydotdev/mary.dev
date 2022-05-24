<script>
	
	import * as THREE from 'three'
	import * as SC from 'svelte-cubed'
	import { onMount } from 'svelte'
	import SplineLoader from '@splinetool/loader'
	
	let mary = null
	
	onMount(() => {
		// load a .splinecode file
		// you can get the URL by clicking Export -> Code in the design file and copying the URL
		
		const loader = new SplineLoader()
		loader.load('https://prod.spline.design/RFQM14JUYlFmoPQW/scene.splinecode',	scene => {
		  mary = scene
		})
	})
</script>

<SC.Canvas antialias background={new THREE.Color('#a7a7a7')} shadows={THREE.PCFShadowMap}>
	<SC.Primitive object={mary} />
	<SC.PerspectiveCamera position={[690.23, 399.24, 774.78]} />
	<SC.OrbitControls/>
</SC.Canvas>

<style>
	:global(body) {
		padding: 0;
	}
</style>


