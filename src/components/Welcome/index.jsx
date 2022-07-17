import React, { useContext, useState, useRef, useEffect } from 'react'
import { ChatContext } from '@/contexts/ChatContext'
import css from './welcome.module.css'

export const Welcome = () => {
  const { state: { username }, setUsername, setShowChat } = useContext(ChatContext)
  const [showAlert, setShowAlert] = useState(false)
  const usernameInput = useRef(null)

  const join = () => {
    if (username !== '') {
      setShowChat(true)
    } else {
      setShowAlert(true)
    }
  }

  const enter = (e) => {
    if (e.keyCode === 13)
      join()
  }

  useEffect(() => {
    usernameInput.current.focus()
  }, [])

  return (
    < div className={css.container}>
      <p className={css.title}>Welcome!</p>
      <label className={css.inputLabel} htmlFor="username">Username</label>
      <div className={css.inputContainer}>
        <input
          ref={usernameInput}
          className={css.input}
          id="username"
          value={username}
          onKeyUp={(e) => enter(e)}
          placeholder="Your username..."
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        />
        <button type='button' className={css.button} onClick={join}>Join</button>
      </div>
      {showAlert && <p className={css.alert}>Username is required</p>}
    </div >
  )
}
