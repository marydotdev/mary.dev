<script>
  import { format } from 'date-fns'
  import ButtonLink from './ButtonLink.svelte'

  export let post
  export let small = false
</script>

<div class="font-display flex flex-col p-4 rounded-xl bg-light dark:bg-dark border-8 border-zinc-200 dark:border-zinc-700 sm:hover:transform sm:hover:scale-105 transition ease-out duration-500">
  <div>
    {#if !small}
      <h1 class="!mt-0 !mb-2">
        <a href={`/posts/${post.slug}`}>{post.title}</a>
      </h1>
    {:else}
      <h3 class="!mt-0 !mb-2">
        <a href={`/posts/${post.slug}`}>{post.title}</a>
      </h3>
    {/if}
    <div class="opacity-70">
      <time>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
      •
      <span>{post.readingTime}</span>
    </div>
  </div>
  <div class="flex-1">{@html post.preview.html}</div>
  <slot name="actions">
    <div class="flex justify-end w-full">
      <ButtonLink href={`/posts/${post.slug}`}>Read More</ButtonLink>
    </div>
  </slot>
</div>
