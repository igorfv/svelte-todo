<style lang="postcss">
  .card {
    @apply rounded-md border-2 h-[10rem] flex justify-center items-center overflow-hidden;
    @apply hover:border-gray-400;
  }

  .card-new {
    @apply border-dashed;
  }

  .card-new:hover > * {
    @apply text-gray-400;
  }
</style>

<svelte:head>
	<title>TODO: Select a list</title>
</svelte:head>

<div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  <div class="card card-new">
    <a class="text-9xl text-gray-300 h-full w-full text-center leading-[10rem]" href="/new">+</a>
  </div>
</div>
