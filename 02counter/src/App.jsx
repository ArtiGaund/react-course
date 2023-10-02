import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter, setCounter ] = useState(15)

  // let counter = 5

  const addValue = () =>{
    console.log("clicked", Math.random())
    //value didn't added by this
    if(counter==20)
      setCounter(20)
    else
      setCounter(counter+1)

    //it's increacing value in console but not in web browser
    console.log("counter value in console", counter)
  }
  const removeValue = () =>{
    if(counter==0)
      setCounter(0)
    else
      setCounter(counter-1)
    console.log("counter value in console", counter)
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br/>
      <button
      onClick={removeValue}
      >Remove value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
