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

<div class="max-w-4xl mx-auto font-display pt-4 px-2">
    <h1 class="font-bold text-4xl md:text-6xl">Oh No!</h1>
    <h2 class="font-bold text-2xl md:text-3xl">Something went wrong.</h2>
    <br />
    <h3 class="font-medium text-2xl">Either the page you are looking for doesn't exist</h3>
    <h4 class="font-regular text-lg">or I messed something up.</h4>
    <br />
    <h5 class="text-2xl">Status Code: <span class="font-mono">{status}</span></h5>
    <h6 class="text-2xl">Message: "<span class="font-mono">{error.message}</span>"</h6>

    <div class="text-lg sm:text-xl pt-12">
        <a href="/" class="text-dark/70 dark:text-light/70 hover:text-dark dark:hover:text-light">Go Home &rarr;</a>
    </div>
</div>


