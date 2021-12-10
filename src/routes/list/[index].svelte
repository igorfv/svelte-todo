<script context="module">
	export async function load({ page, fetch }) {
		const { index } = page.params;
		return {
			props: { index: Number(index) }
		};
	}
</script>

<script>
  import { onMount } from 'svelte'
  import { browser } from '$app/env';
  import { goto } from '$app/navigation';
  import ListView from '$lib/list-view/index.svelte'
  import { getList } from '$lib/lists'

	export let index;
  let list = null

  onMount(() => {
    if (!browser) return
    list = getList(index)

    if (!list) goto('/404')
  })
</script>

<svelte:head>
	<title>TODO: {list && list.name || 'unknown'}</title>
</svelte:head>


{#if list}
  <ListView {index} name={list.name} tasks={list.tasks} />
{:else}
  <div class="text-teal-500">Loading...</div>
{/if}
