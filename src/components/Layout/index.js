import React, { useContext } from 'react'
import { WelcomeContext } from '@/contexts/WelcomeContext'
import { Welcome } from '@components/Welcome'
import { ChatView } from '@components/ChatView'
import css from './layout.module.css'

export const Layout = () => {
  const { state: { showChat } } = useContext(WelcomeContext)

  return (
    <div className={css.container}>
      {
        showChat ? <ChatView /> : <Welcome />
      }
    </div>
  )
}
