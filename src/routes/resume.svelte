<script>
import Education from "$lib/components/Education.svelte";
import Experience from "$lib/components/Experience.svelte";

</script>

<div class="w-full max-w-6xl mx-auto flex flex-col justify-center py-8 px-2">
    <div class="text-center">
        <h2 class="text-5xl sm:text-7xl font-bold tracking-tight pb-4">Mary Haedrich</h2>
        <ul class="text-xl sm:text-2xl font-medium pb-4 flex flex-col md:flex-row justify-center md:gap-2">
            <li>www.mary.dev</li>
            <span class="hidden md:inline"> | </span>
            <li>mary.haedrich@gmail.com</li>
            <span class="hidden md:inline"> | </span>
            <li>(631) 983-7978</li>
        </ul>

        <p class="hidden sm:block text-xl">
            <a href="/MaryHaedrich-Mar2022.pdf" target="_blank" class="underline">Download a PDF</a>
        </p>
    </div>

    <Experience />
    <Education />

    <div class="py-6">
        <h2 class="text-2xl font-medium tracking-tight pb-4">
            RELEVANT COURSEWORK
        </h2>

        <div class="flex flex-col gap-6">
            <p class="text-lg sm:text-xl">Exploring Interactive Media, Digital Creative Writing, Digital Media & Public Responsibility, Intro to Video Game Design, Computer Graphics, Information & Web Programming, Environmental Design, Film/Animation, Philosophical Ethics, Multivariable Calculus</p>
        </div>
    </div>

    <div class="py-6">
        <h2 class="text-2xl font-medium tracking-tight pb-4">
            SKILLS
        </h2>

        <div class="flex flex-col gap-6">
            <p class="text-lg sm:text-xl">HTML, CSS, JavaScript, React, NextJS, SvelteKit, NodeJS, Figma, Adobe CC, Git, SQL, REST, GraphQL</p>
        </div>
    </div>

    <div class="py-6">
        <h2 class="text-2xl font-medium tracking-tight pb-4">
            INTERESTS
        </h2>

        <div class="flex flex-col gap-6">
            <p class="text-lg sm:text-xl">Bioethics, Artificial Intelligence, Bioinformatics, AR/XR, Humane Design, Space, Carbon Capture Technology</p>
        </div>
    </div>

    <div class="pt-12 text-center">
        <p class="text-xl">
            <a href="/MaryHaedrich-Mar2022.pdf" target="_blank" class="underline">Download a PDF</a>
        </p>
    </div>
</div>