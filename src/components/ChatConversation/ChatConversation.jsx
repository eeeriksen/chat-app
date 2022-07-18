import React, { useRef, useState, useEffect } from 'react'
import css from './chatConversation.module.css'

export const ChatConversation = () => {
  const messageInput = useRef(null)
  const [message, setMessage] = useState('')

  const enter = (e) => {
    // if (e.keyCode === 13)
    // sendMessage()
  }

  useEffect(() => {
    messageInput.current.focus()
  }, [])

  return (
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
  )
}
