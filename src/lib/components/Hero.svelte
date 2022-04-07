<script>
import MaryWaving from "./MaryWaving.svelte";
import SocialLinks from "./SocialLinks.svelte";

</script>

<section class="max-w-6xl mx-auto px-4 pt-4 pb-2 md:pt-24">
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
        <div class="shrink max-w-lg md:w-1/2 lg:w-1/3 flex justify-center">
            <div class="">
                <MaryWaving />
            </div>
        </div>
    </div>
</section>

<div class="bg-pink-300/50 dark:hidden">
    <svg class="w-full text-light dark:text-dark"  viewBox="0 0 900 176" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 124L21.5 121.8C43 119.7 86 115.3 128.8 107.5C171.7 99.7 214.3 88.3 257.2 101.3C300 114.3 343 151.7 385.8 167C428.7 182.3 471.3 175.7 514.2 162.2C557 148.7 600 128.3 642.8 119.3C685.7 110.3 728.3 112.7 771.2 122.8C814 133 857 151 878.5 160L900 169V3.05176e-05H878.5C857 3.05176e-05 814 3.05176e-05 771.2 3.05176e-05C728.3 3.05176e-05 685.7 3.05176e-05 642.8 3.05176e-05C600 3.05176e-05 557 3.05176e-05 514.2 3.05176e-05C471.3 3.05176e-05 428.7 3.05176e-05 385.8 3.05176e-05C343 3.05176e-05 300 3.05176e-05 257.2 3.05176e-05C214.3 3.05176e-05 171.7 3.05176e-05 128.8 3.05176e-05C86 3.05176e-05 43 3.05176e-05 21.5 3.05176e-05H0V124Z" fill="currentColor"/>
    </svg>
</div>

    