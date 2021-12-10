<script lang="ts">
  import { goto } from '$app/navigation';
  import { addNewList, getLists } from '$lib/lists'

  let listName = ""

  let isNameRequired = false
  let isSubmitDisabled = true

  $: isSubmitDisabled = listName.length === 0

  const handleChange = async () => {
    isNameRequired = true
  }

  const handleSubmit = () => {
    const lists = getLists()

    const similarIndex = lists.findIndex((list) => list.name === listName)
    if (similarIndex >= 0) return goto(`/list/${similarIndex}`)

    const listId = addNewList(listName)
    goto(`/list/${listId}`)
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="mb-8">
    <label for="name" class="mb-4 text-xl text-teal-900">New list name:</label>
    <input
      id="name"
      type="text"
      required={isNameRequired}
      maxlength="40"
      on:input={handleChange}
      bind:value={listName}
      class="
        block w-full py-2 border-b border-gray-300 text-xl shadow-sm text-teal-600
        focus:outline-none focus:border-b-2 focus:border-teal-700 focus:text-teal-700
        invalid:border-red-600 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500
      "
    />
  </div>
  <div class="text-center">
    <button
      type="submit"
      disabled={isSubmitDisabled}
      class="
        bg-cyan-600 hover:bg-cyan-700 px-10 py-2 rounded text-white
        disabled:bg-gray-400
      "
    >
      Create new list
    </button>
  </div>
</form>
