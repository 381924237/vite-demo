import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from './state'
import { InputEvent } from './type'

let id = 0
function getId() {
  return id++
}

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('')
  const setTodoList = useSetRecoilState(todoListState)

  const addItem = () => {
    setTodoList((oldList) => [
      ...oldList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ])
    setInputValue('')
  }

  const onChange = ({ target: { value } }: InputEvent) => {
    setInputValue(value)
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  )
}

export default TodoItemCreator
