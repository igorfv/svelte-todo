<script lang="ts">
  import { onMount } from 'svelte'
  import { browser } from '$app/env';
  import { getLists, updateListTasks } from '$lib/lists'
  import type { List } from '$lib/lists'

  let cards: List[] = []

  onMount(() => {
    if (!browser) return
    cards = getLists()
  })
</script>

<style lang="postcss">
  .card {
    @apply rounded-md border-2 h-[10rem] flex justify-center items-center overflow-hidden p-4;
    @apply text-gray-300 text-center text-2xl overflow-hidden relative;
    @apply hover:border-gray-400 hover:text-cyan-600 group-active:border-cyan-700 group-active:text-cyan-700 group-active:bg-cyan-100;
  }

  .card-info {
    @apply absolute bottom-0 right-1 text-base text-gray-400;
    @apply group-hover:text-gray-500;
  }

</style>

<div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  {#each cards as card, index (card.name)}
    <a class="group" href={`/list/${index}`}>
      <div class="card">
        {card.name}
        <span class="card-info">{card.tasks.filter((task) => task.done).length} out of {card.tasks.length}</span>
      </div>
    </a>
  {/each}

  <a class="group" href="/new">
    <div class="card border-dashed">
      <span class="text-9xl leading-[10rem]">+</span>
    </div>
  </a>

</div>
