<script>
    import { format } from 'date-fns'
  
    export let item
  </script>
  
  <div class="font-display flex flex-col p-4 rounded-lg sm:hover:transform sm:hover:scale-105 transition ease-out duration-500">
    <div>

        <h2 class="!mt-0 !mb-2">
          <a href={`/posts/${item.slug}`}>{item.title}</a>
        </h2>

      <div class="opacity-70">
        <time>{format(new Date(item.date), 'MMMM d, yyyy')}</time>
        •
        <span>{item.readingTime}</span>
      </div>
    </div>
    <div class="flex-1">{@html item.preview.html}</div>
    <slot name="actions">
      <div class="flex justify-end w-full">
        <a href={`/posts/${item.slug}`} class="!no-underline">Read More &rarr;</a>
      </div>
    </slot>
  </div>
  