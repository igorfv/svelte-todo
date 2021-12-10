<script lang="ts">
  import { updateListTasks } from '$lib/lists'
  import type { Task } from '$lib/lists'

  export let index: number
  export let name: string
  export let tasks: Task[]

  let newTask = ""

  let isSubmitDisabled = true
  $: isSubmitDisabled = newTask.length === 0

  const handleNewTask = () => {
    const taskName = newTask
    newTask = ""

    // returns if already exists
    if (tasks.find((task) => task.name === taskName)) return

    tasks.push({
      name: taskName,
      done: false,
    })

    tasks = [...tasks]

    updateListTasks(index, tasks)
  }

  const strikeTask = (taskIndex: number) => {
    const curTask = tasks[taskIndex]
    curTask.done = !curTask.done

    tasks = [...tasks]
    updateListTasks(index, tasks)
  }
</script>

<div class="min-h-full relative pb-10 box-border">
  <h2 class="text-3xl text-gray-600 font-light mb-4">{name}</h2>
  <div>
    {#each tasks as task, taskIndex (task.name)}
      <div
        on:click={() => strikeTask(taskIndex)}
        class={`cursor-pointer rounded-full border shadow-md mb-4 py-2 px-6 text-gray-700 text-lg truncate ${task.done && 'line-through opacity-50'}`}
      >
        {task.name}
      </div>
    {/each}
  </div>
  <form on:submit|preventDefault={handleNewTask} class="flex sticky bottom-0 w-full py-4 bg-white">
    <input
      type="text"
      placeholder="Task name"
      bind:value={newTask}
      maxlength="100"
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
