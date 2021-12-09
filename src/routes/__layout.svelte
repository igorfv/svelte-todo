<script>
  import Header from '../libs/header/index.svelte';
  import '../app.css';
</script>

<Header />

<main class="max-w-screen-xl mx-auto">
  <div class="mx-4">
    <slot />
  </div>
</main>
