import React from 'react'
import { ListItem, InputEvent } from './type'
import { useRecoilState } from 'recoil'
import { todoListState } from './state'

const replaceItemAtIndex = (arr: ListItem[], index: number, newValue: ListItem) => [
  ...arr.slice(0, index),
  newValue,
  ...arr.slice(index + 1),
]

const removeItemAtIndex = (arr: ListItem[], index: number) => [...arr.slice(0, index), ...arr.slice(index + 1)]

const TodoItem = ({ item }: { item: ListItem }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const index = todoList.findIndex((listItem) => listItem === item)

  const editItemText = ({ target: { value } }: InputEvent) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    })
    setTodoList(newList)
  }

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    })
    setTodoList(newList)
  }

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index)
    setTodoList(newList)
  }

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input type="checkbox" checked={item.isComplete} onChange={toggleItemCompletion} />
      <button onClick={deleteItem}>X</button>
    </div>
  )
}

export default TodoItem
