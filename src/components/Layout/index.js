import React, { useContext } from 'react'
import { AppContext } from '@/app/StateContextManagement'

export const Layout = () => {
  const { username } = useContext(AppContext)

  return (
    <div>{username}</div>
  )
}
