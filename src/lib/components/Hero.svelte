<script>
import MaryWaving from "./MaryWaving.svelte";
import SocialLinks from "./SocialLinks.svelte";

</script>

<section class="relative max-w-6xl mx-auto pt-8 sm:pt-2 bg-gradient-to-r
from-blue-100
to-sky-100
dark:from-indigo-800/10
dark:to-blue-900/10
background-animate">
    <div class="flex flex-col items-center pt-8 sm:pt-2 gap-6 sm:gap-0 sm:flex-row sm:justify-between">
        <!-- Left Side -->
        <div class="max-w-2xl w-full mx-auto flex flex-col items-start justify-center">
            <h1 class="text-center sm:text-left text-4xl sm:text-5xl lg:text-6xl leading-10 font-bold tracking-tighter">
                <span>My name is Mary,</span>
                <br />
                <span>I design and develop websites, apps, and digital experiences.</span>
            </h1>

            <div class="pt-8 w-full flex justify-center sm:justify-start">
                <SocialLinks />
            </div>
        </div>

        <!-- Right Side -->
        <div class="w-1/2 lg:w-1/3 sm:pt-36">
            <MaryWaving />
        </div>
    </div>
</section>


<style>
    .background-animate {
    background-size: 400%;

    -webkit-animation: AnimationName 10s ease infinite;
    -moz-animation: AnimationName 10s ease infinite;
    animation: AnimationName 10s ease infinite;
  }

  @keyframes AnimationName {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
</style>