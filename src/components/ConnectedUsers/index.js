import React, { useContext, useEffect, useState } from 'react'
import { ChatContext } from '@/contexts/ChatContext'
import css from './connectedUsers.module.css'

export const ConnectedUsers = () => {
  const { Socket, state: { username } } = useContext(ChatContext)
  const [usersList, setUsersList] = useState([])

  useEffect(() => {
    Socket.on('updateUsersList', (user) => {
      setUsersList([...usersList, user])
    })
  }, [Socket])

  return (
    <div className={css.usersContainer}>
      <p className={css.usersTitle}>Connected Users</p>
      <div className={css.listOfUsers}>
        {
          usersList.map((user, i) => (
            <p className={username === user ? css.bold : null} key={i}>{user}</p>
          ))
        }
      </div>
    </div>
  )
}
