import React, { useEffect, useRef, useState } from 'react'
import css from './chatview.module.css'

export const ChatView = () => {
  const messageInput = useRef(null)
  const [message, setMessage] = useState('')

  useEffect(() => {
    messageInput.current.focus()
  }, [])

  const enter = (e) => {
    // if (e.keyCode === 13)
    // sendMessage()
  }

  return (
    <div className={css.container}>
      <div className={css.usersContainer}>
        <p className={css.usersTitle}>Connected Users</p>
        <div className={css.listOfUsers}>
          {
            [0, 0, 0, 0].map((user, i) => (
              <p key={i}>user</p>
            ))
          }
        </div>
      </div>
      <div className={css.chatContainer}>
        <div className={css.conversation}>
          {
            [0, 0, 0, 0].map((message, i) => (
              <p key={i}>message</p>
            ))
          }
        </div>
        <div className={css.message}>
          <input
            ref={messageInput}
            className={css.input}
            id="message"
            value={message}
            onKeyUp={(e) => enter}
            placeholder="Your message..."
            onChange={(e) => setMessage(e.target.value)}
            type="text"
          />
          <button
            type='button'
            className={css.button}
            onClick={() => { }}
          >&#9658;</button>
        </div>
      </div>
    </div>
  )
}
