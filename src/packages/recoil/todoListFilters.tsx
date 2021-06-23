import React from 'react'
import { useRecoilState } from 'recoil'
import { todoListFilterState } from './state'
import { InputEvent, FilterState } from './type'

const TodoListFilters: React.FC<{}> = () => {
  const [filterState, setFilterState] = useRecoilState(todoListFilterState)

  const updateFilte = ({ target: { value } }: InputEvent) => {
    setFilterState(value as FilterState)
  }

  return (
    <>
      Filter:
      <select value={filterState} onChange={updateFilte}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  )
}

export default TodoListFilters
