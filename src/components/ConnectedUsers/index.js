import React from 'react'
import css from './connectedUsers.module.css'

export const ConnectedUsers = () => {
  return (
    <div className={css.usersContainer}>
      <p className={css.usersTitle}>Connected Users</p>
      <div className={css.listOfUsers}>
        {
          [0, 0, 0, 0].map((user, i) => (
            <p key={i}>user</p>
          ))
        }
      </div>
    </div>
  )
}
