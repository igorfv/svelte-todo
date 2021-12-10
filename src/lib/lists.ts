const listsKey = 'lists'

export interface Card {
  name: string
  tasks: Task[]
}

export interface Task {
  name: string
  done: boolean
}

export const getLists = (): Card[] => {
 if (!localStorage) throw new Error("No localStorage")

 let lists: string | null

 try {
   lists = localStorage.getItem(listsKey)
 } catch(e) {}

 if (!lists) return []
 return JSON.parse(lists)
}

export const saveLists = (lists: Card[]): void => {
  if (!localStorage) throw new Error("No localStorage")

  try {
   localStorage.setItem(listsKey, JSON.stringify(lists))
 } catch(e) {}
}

export const addNewList = (name: string): number => {
  const lists = getLists()
  const newIndex = lists.length

  lists.push({
    name,
    tasks: [],
  })

  saveLists(lists)

  return newIndex
}
