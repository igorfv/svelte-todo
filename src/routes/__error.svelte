<script context="module">
	export function load({ error, status }) {
		return {
			props: { error, status }
		};
	}

  const errorMessages = {
    "404": "The page is another castle!",
    "500": "Something terrible happened!",
  }
</script>

<script>
	import { dev } from '$app/env';
	export let error, status;
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<h1 class="text-9xl font-bold text-center text-teal-600">{status}</h1>

<p class="text-center text-gray-600 text-2xl">{errorMessages[status] || error.message}</p>

{#if dev && error.stack}
  <pre class="mt-16 border rounded p-8 overflow-y-auto">{error.stack}</pre>
{/if}
