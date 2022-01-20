<script>
    import { format } from 'date-fns'
    import ButtonLink from './ButtonLink.svelte'
  
    export let item
    export let small = false
  </script>
  
  <div class="font-display flex flex-col p-4 rounded-lg sm:hover:transform sm:hover:scale-105 transition ease-out duration-500">
    <div>
      {#if !small}
        <h1 class="!mt-0 !mb-2">
          <a href={`/posts/${item.slug}`}>{item.title}</a>
        </h1>
      {:else}
        <h3 class="!mt-0 !mb-2">
          <a href={`/posts/${item.slug}`}>{item.title}</a>
        </h3>
      {/if}
      <div class="opacity-70">
        <time>{format(new Date(item.date), 'MMMM d, yyyy')}</time>
        •
        <span>{item.readingTime}</span>
      </div>
    </div>
    <div class="flex-1">{@html item.preview.html}</div>
    <slot name="actions">
      <div class="flex justify-end w-full">
        <ButtonLink href={`/posts/${item.slug}`}>Read More</ButtonLink>
      </div>
    </slot>
  </div>
  