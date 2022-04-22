<script>
import MaryWaving from "./MaryWaving.svelte";
import SocialLinks from "./SocialLinks.svelte";

</script>

<section class="max-w-6xl mx-auto px-4 pt-4 md:pt-24">
    <div class="flex flex-col items-center gap-24 sm:gap-0 sm:flex-row sm:justify-between">
        <!-- Left Side -->
        <div class="max-w-2xl w-full mx-auto flex flex-col items-start justify-center">
            <h1 class="text-center sm:text-left text-4xl sm:text-5xl lg:text-6xl leading-10 font-bold tracking-tighter">
                <span>My name is Mary,</span>
                <br />
                <span>I design and develop websites, apps, and digital experiences.</span>
            </h1>

            <div class="pt-8 w-full flex justify-center md:justify-start">
                <SocialLinks />
            </div>

            <div class="w-full flex justify-center md:justify-start">
                <a href="mailto:mary.haedrich@gmail.com" target="_blank">
                    <div class="relative w-fit group">
                        <div class="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse group-hover:animate-none" />
                        <div class="relative mt-8 md:mt-12 p-4 flex items-center gap-3 rounded-lg bg-light dark:bg-dark">
                            <div class="rounded-full w-4 h-4 bg-green-400 border-2 border-green-600" />
                            <p class="tracking-tight text-xl md:text-2xl font-medium">
                                Currently available
                            </p>
                        </div>
                    </div>
                </a>
            </div>   
        </div>

        <!-- Right Side -->
        <div class="shrink w-1/2 md:w-1/2 lg:w-1/3 flex justify-center">
            <MaryWaving />
        </div>
    </div>
</section>


    