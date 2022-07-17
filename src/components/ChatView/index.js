import React, { useEffect, useRef, useState } from 'react'
import css from './chatview.module.css'
import { ChatConversation } from '@components/ChatConversation'
import { ConnectedUsers } from '../ConnectedUsers'

export const ChatView = () => {
  return (
    <div className={css.container}>
      <ConnectedUsers />
      <ChatConversation />
    </div>
  )
}
