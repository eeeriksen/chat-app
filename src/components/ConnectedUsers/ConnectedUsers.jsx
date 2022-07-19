import React, { useContext, useEffect, useState } from 'react'
import { UsersContext } from '@/contexts/UsersContext'
import { SocketContext } from '@/contexts/SocketContext'
import css from './connectedUsers.module.css'

export const ConnectedUsers = () => {
  const { state: { username, listOfUsers }, updateUsers } = useContext(UsersContext)
  const { Socket } = useContext(SocketContext)

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
