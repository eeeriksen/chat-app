import React, { useContext, useState } from 'react'
import { Layout } from '@/components/Layout'
import { Welcome } from '@/components/Welcome'
import { WelcomeContext } from '@/contexts/WelcomeContext'
import { StateContextProvider } from '@/providers/StateContextProvider'
import css from './app.module.css'

export function App() {
  return (
    <StateContextProvider>
      <Layout />
    </StateContextProvider>
  )
}