<script context="module">
    export function load({ error, status }) {
        return {
            props: {
                error,
                status
            }
        }
    }
</script>

<script>
    export let status;
    export let error;
</script>

<div class="max-w-2xl mx-auto flex flex-col justify-between pt-4 px-2">
    <div class="pb-12">
        <h1 class="text-6xl sm:text-7xl lg:text-8xl leading-10 font-bold tracking-tighter">
            404
        </h1>
    
        <h2 class="text-4xl sm:text-5xl lg:text-6xl leading-10 font-bold tracking-tighter">
            Something went wrong, but don't worry!
        </h2>
    </div>
    

    <h3 class="pb-12 text-4xl sm:text-5xl lg:text-6xl leading-10 font-bold tracking-tighter">
        <span>Go back <a href="/" class="underline sm:no-underline sm:hover:underline">home</a> or read my <a href="/blog" class="underline sm:no-underline sm:hover:underline">latest blog post</a> .</span>
    </h3>

    <div class="pb-12">
        <h5 class="text-2xl">Status Code: <span class="font-mono">{status}</span></h5>
        <h6 class="text-2xl">Message: "<span class="font-mono">{error.message}</span>"</h6>
    </div>
</div>


