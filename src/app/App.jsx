import React, { useContext, useState } from 'react'
import { Layout } from '@/components/Layout'
import { Welcome } from '@/components/Welcome'
import { ChatContext } from '@/contexts/ChatContext'
import { StateContextProvider } from '@/providers/StateContextProvider'
import css from './app.module.css'

export function App() {
  return (
    <StateContextProvider>
      <Layout />
    </StateContextProvider>
  )
}