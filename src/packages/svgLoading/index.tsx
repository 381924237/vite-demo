import React from 'react'
import { a } from '@/utils/constant'
import './index.scss'

const Test: React.FC<{}> = () => {
  console.log(a)
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <circle id="circle" cx="12" cy="12" r="10" fill="none" strokeWidth="2" stroke="green" />
    </svg>
  )
}

export default Test
