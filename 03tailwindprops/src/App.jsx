import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  
  let myObj = {
    name: "Vivek",
    age: 21
  }

  let myArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="Vivek" btnText="Click Me"/>
      <Card username="Mihir"/>
    </>
  )
}

export default App

