import React, { useState } from 'react'
import { Layout } from '../components/Layout'
import { Welcome } from '../components/Welcome'
import { StateContextProvider } from './StateContextManagement'

export function App() {

  return (
    <StateContextProvider>
      <Layout />
      <Welcome />
    </StateContextProvider>
  )
}