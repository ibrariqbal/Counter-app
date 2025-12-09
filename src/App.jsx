import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter/Counter'

function App() {
  const [count, setCount] = useState(1)

   const Increment=()=>{
     setCount(count+1)
   }
   const Decrement=()=>{
     if(count>0){
       setCount(count-1)
     }
   }
  return (
    <>
      <Counter count={count} setCount={setCount} Increment={Increment} Decrement={Decrement}/>
    </>
  )
}

export default App
