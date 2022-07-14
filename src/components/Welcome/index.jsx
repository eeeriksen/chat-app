import React, { useContext } from 'react'
import { AppContext } from '@/app/StateContextManagement'
import styles from './welcome.module.css'

export const Welcome = () => {
  const { setUsername } = useContext(AppContext)

  return (
    < div >
      <p>Welcome!</p>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        onChange={(e) => setUsername(e.target.value)}
        type="text"
      />
    </div >
  )
}
