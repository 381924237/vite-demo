import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import search from '@/utils/search'

const RouterTest = () => {
  const history = useHistory()
  return (
    <div>
      <button
        onClick={() => {
          history.push('loading')
        }}
      >
        跳转
      </button>
    </div>
  )
}

export default RouterTest
