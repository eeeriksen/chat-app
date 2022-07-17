import React, { useState } from "react";
import { ChatContext } from '@/contexts/ChatContext'
import { Socket } from '@/services/socketConnection'

export const StateContextProvider = (props) => {
  const setUsername = (username) => {
    setState({ ...state, username })
  }

  const setShowChat = (value) => {
    setState({ ...state, showChat: value })
  }

  const initialState = {
    username: '',
    showChat: false,
  }

  const [state, setState] = useState(initialState)

  const valueProvider = {
    state: state,
    setUsername,
    setShowChat,
    Socket
  }

  return (
    <ChatContext.Provider value={valueProvider}>
      {props.children}
    </ChatContext.Provider>
  )
}