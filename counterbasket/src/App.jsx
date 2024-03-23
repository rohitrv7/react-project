import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'boxicons'

function App() {
  const [count, setCount] = useState(0)
  // const [countdown, setCountdown] = useState(5)

  const right = ()=>{
    let a = count-1
    setCount(left)
    if(a<=0){
      return 0
    }
    return a
  }

  return (
    <div className='w-full flex justify-between items-center h-screen bg-black text-white'>

      <div className="icon flex gap-x-4 items-center border-white">
      <button onClick={()=>{setCount(right)}} className='p-3 fill-white bg-red-600'><box-icon name='right-arrow-alt'></box-icon></button>
      <div className="basket">
        <p>Basket One</p>
        <p>Count : {count}</p>
      </div>
      </div>
      
      <div className="icon flex items-center gap-x-4">
      <div className="basket">
        <p>Basket Two</p>
        <p>Count : {count}</p>
      </div>
      <button onClick={()=>{setCount(left)}} className='p-3 fill-white bg-red-600'><box-icon name='left-arrow-alt'></box-icon></button>
      </div>

    </div>
  )
}

export default App
