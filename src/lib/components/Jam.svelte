<script>
    import { onMount } from 'svelte';
    
    function supportsHEVCAlpha() {
    const navigator = window.navigator;
    const ua = navigator.userAgent.toLowerCase()
    const hasMediaCapabilities = !!(navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo)
    const isSafari = ((ua.indexOf('safari') != -1) && (!(ua.indexOf('chrome')!= -1) && (ua.indexOf('version/')!= -1)))
    if (isSafari && hasMediaCapabilities) {
        return true
    } else {
        return false
    }
  };
  
    onMount(() => {
		const video = document.getElementById('video');
        video.src = supportsHEVCAlpha() ? '/videos/mary.mov' : '/videos/mary.webm';	
	});
</script>

<video
preload="metadata"
autoplay
muted
playsinline
loop
id="video"
/>