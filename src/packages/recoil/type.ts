export type ListItem = {
  id: number
  text: string
  isComplete: boolean
}

export type InputEvent = {
  target: {
    value: string
  }
}

export type FilterState = 'Show All' | 'Show Completed' | 'Show Uncompleted'
