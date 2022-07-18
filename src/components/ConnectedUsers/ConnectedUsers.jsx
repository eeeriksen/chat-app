import React, { useContext, useEffect, useState } from 'react'
import { ChatContext } from '@/contexts/ChatContext'
import css from './connectedUsers.module.css'

export const ConnectedUsers = () => {
  const { Socket, state: { username, listOfUsers }, updateUsers } = useContext(ChatContext)

  useEffect(() => {
    Socket.on('updateUsers', (value) => {
      updateUsers(value)
    })
  }, [Socket])

  return (
    <div className={css.usersContainer}>
      <p className={css.usersTitle}>Connected Users</p>
      <div className={css.listOfUsers}>
        {
          listOfUsers.map(user => (
            <p
              className={`
                ${css.username}
                ${username === user.username
                  ? css.bold
                  : null}
              `}
              key={user.id}
            >
              {user.username}
            </p>
          ))
        }
      </div>
    </div>
  )
}
