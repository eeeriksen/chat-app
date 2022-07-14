import React, { createContext, useState } from "react";

export const AppContext = createContext({
  username: '',
  setUsername: () => { }
})

export const StateContextProvider = (props) => {
  const setUsername = (username) => {
    setState({ ...state, username })
  }

  const initialState = {
    username: 'Your username...',
    setUsername: setUsername
  }

  const [state, setState] = useState(initialState)

  return (
    <AppContext.Provider value={state}>
      {props.children}
    </AppContext.Provider>
  )
}