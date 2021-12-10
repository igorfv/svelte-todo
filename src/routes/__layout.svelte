<script>
  import Header from '$lib/header/index.svelte';
  import Footer from '$lib/footer/index.svelte';
  import '../app.css';
</script>

<style global lang="postcss">
  html, body {
    @apply min-h-full h-full;
  }
</style>

<div class="flex flex-col h-full">
  <Header />

  <div class="grow h-full">
    <main class="max-w-screen-xl mx-auto">
      <div class="mx-4">
        <slot />
      </div>
    </main>
  </div>

  <Footer />
</div>
