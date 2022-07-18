import React, { useContext } from 'react'
import { ChatContext } from '@/contexts/ChatContext'
import { Welcome } from '@components/Welcome/Welcome'
import { ChatView } from '@components/ChatView/ChatView'
import css from './layout.module.css'

export const Layout = () => {
  const { state: { showChat } } = useContext(ChatContext)

  return (
    <div className={css.container}>
      {
        showChat ? <ChatView /> : <Welcome />
      }
    </div>
  )
}
