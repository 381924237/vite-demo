import { atom, selector } from 'recoil'
import { ListItem, FilterState } from './type'

const todoListState = atom<ListItem[]>({
  key: 'todoListState',
  default: [
    {
      id: 1,
      isComplete: false,
      text: '默认',
    },
  ],
})

const todoListFilterState = atom<FilterState>({
  key: 'todoListFilterState',
  default: 'Show All',
})

const filteredTodoListState = selector({
  key: 'filterdTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState)
    const list = get(todoListState)
    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete)
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete)
      default:
        return list
    }
  },
})

const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState)
    const totalNum = todoList.length
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length
    const totalUncompletedNum = totalNum - totalCompletedNum
    const percentCompleted = Math.round(totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100) + '%'
    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    }
  },
})

export { todoListState, todoListFilterState, filteredTodoListState, todoListStatsState }
