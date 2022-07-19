import React, { useContext } from 'react'
import { UsersContext } from '@/contexts/UsersContext'
import { Welcome } from '@components/Welcome/Welcome'
import { ChatView } from '@components/ChatView/ChatView'
import css from './layout.module.css'

export const Layout = () => {
  const { state: { showChat } } = useContext(UsersContext)

  return (
    <div className={css.container}>
      {
        showChat ? <ChatView /> : <Welcome />
      }
    </div>
  )
}
