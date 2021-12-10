const listsKey = 'lists'

export interface List {
  name: string
  tasks: Task[]
}

export interface Task {
  name: string
  done: boolean
}

export const getLists = (): List[] => {
 if (!localStorage) throw new Error("No localStorage")

 let lists: string | null

 try {
   lists = localStorage.getItem(listsKey)
 } catch(e) {}

 if (!lists) return []
 return JSON.parse(lists)
}

export const saveLists = (lists: List[]): void => {
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

export const getList = (index: number): List => {
  const lists = getLists()
  const list = lists[index]

  return list
}

export const saveList = (index: number, list: List): void => {
  const lists = getLists()
  lists[index] = list

  saveLists(lists)
}
