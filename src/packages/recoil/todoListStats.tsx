import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoListStatsState } from './state'

const TodoListStats: React.FC<{}> = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } = useRecoilValue(todoListStatsState)
  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {percentCompleted}</li>
    </ul>
  )
}

export default TodoListStats
