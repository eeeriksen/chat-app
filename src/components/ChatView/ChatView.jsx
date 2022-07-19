import React, { useContext, useEffect, useRef, useState } from 'react'
import css from './chatview.module.css'
import { ChatConversation } from '@components/ChatConversation/ChatConversation'
import { ConnectedUsers } from '@/components/ConnectedUsers/ConnectedUsers'
import { UsersContext } from '@/contexts/UsersContext'
import { SocketContext } from '@/contexts/SocketContext'

export const ChatView = () => {
  const { state: { username } } = useContext(UsersContext)
  const { Socket } = useContext(SocketContext)

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
