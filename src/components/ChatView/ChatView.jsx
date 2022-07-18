import React, { useContext, useEffect, useRef, useState } from 'react'
import css from './chatview.module.css'
import { ChatConversation } from '@components/ChatConversation/ChatConversation'
import { ConnectedUsers } from '@/components/ConnectedUsers/ConnectedUsers'
import { ChatContext } from '@/contexts/ChatContext'

export const ChatView = () => {
  const { state: { username }, Socket } = useContext(ChatContext)

  useEffect(() => {
    Socket.emit('joinRoom', { username, room: 'main' })
  }, [])

  return (
    <div className={css.container}>
      <ConnectedUsers />
      <ChatConversation />
    </div>
  )
}
