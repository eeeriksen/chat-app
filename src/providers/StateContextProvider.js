import React, { useState } from "react";

import { WelcomeContext } from '../contexts/WelcomeContext'

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
    setShowChat
  }

  return (
    <WelcomeContext.Provider value={valueProvider}>
      {props.children}
    </WelcomeContext.Provider>
  )
}