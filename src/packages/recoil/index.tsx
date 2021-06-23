import React from 'react'
import { useRecoilValue, RecoilRoot } from 'recoil'
import TodoItem from './todoItem'
import TodoItemCreator from './todoItemCreator'
import TodoListFilters from './todoListFilters'
import TodoListStats from './todoListStats'
import { filteredTodoListState } from './state'

const TodoList: React.FC<{}> = () => {
  const todoList = useRecoilValue(filteredTodoListState)
  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((item) => (
        <TodoItem item={item} key={item.id} />
      ))}
    </>
  )
}

const Recoil = () => {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  )
}
export default Recoil
