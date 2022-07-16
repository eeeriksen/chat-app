import React, { useContext } from 'react'
import { WelcomeContext } from '@/contexts/WelcomeContext'
import css from './welcome.module.css'

export const Welcome = () => {
  const { state: { username }, setUsername, setShowChat } = useContext(WelcomeContext)

  const join = () => {
    setShowChat(true)
  }

  return (
    < div className={css.container}>
      <p className={css.title}>Welcome!</p>
      <label className={css.inputLabel} htmlFor="username">Username</label>
      <div className={css.inputContainer}>
        <input
          className={css.input}
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        />
        <button className={css.button} onClick={join}>Join</button>
      </div>
    </div >
  )
}
