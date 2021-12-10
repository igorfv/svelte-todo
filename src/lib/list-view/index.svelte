<script lang="ts">
  import type { Task } from '$lib/lists'

  export let index: number
  export let name: string
  export let tasks: Task []

  let newTask = ""

  let isSubmitDisabled = true
  $: isSubmitDisabled = newTask.length === 0
</script>

<div class="h-full relative">
  <h2 class="text-3xl text-gray-600 font-light">{name}</h2>
  <div>

  </div>
  <form class="flex sticky bottom-0 w-full py-4 bg-white">
    <input
      type="text"
      placeholder="Task name"
      bind:value={newTask}
      class="
        block w-full py-2 border-b border-gray-300 text-xl shadow-sm text-teal-600
        focus:outline-none focus:border-b-2 focus:border-teal-700 focus:text-teal-700
      "
    >
    <button
      type="submit"
      disabled={isSubmitDisabled}
      class="
        bg-cyan-600 hover:bg-cyan-700 px-10 py-2 rounded text-white
        disabled:bg-gray-400 ml-4
      "
    >
      Add
    </button>
  </form>
</div>
