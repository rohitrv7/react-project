import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("");

  return (
    <div className="w-full h-screen" 
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 px-3 py-3 shadow-lg bg-white rounded-3xl">
          <button onClick={()=> setColor("red")} className='outline-none px-7 py-2 rounded-3xl text-white shadow-red-400'
          style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=> setColor("green")} className='outline-none px-7 py-2 rounded-3xl text-white shadow-red-400'
          style={{backgroundColor:"Green"}}>Green</button>
          <button onClick={()=> setColor("Royalblue")} className='outline-none px-7 py-2 rounded-3xl text-white shadow-red-400'
          style={{backgroundColor:"Royalblue"}}>Royalblue</button>
          <button onClick={()=> setColor("coral")} className='outline-none px-7 py-2 rounded-3xl text-white shadow-red-400'
          style={{backgroundColor:"coral"}}>Coral</button>
          <button onClick={()=> setColor("crimson")} className='outline-none px-7 py-2 rounded-3xl text-white shadow-red-400'
          style={{backgroundColor:"red"}}>Crimson</button>
        </div>
      </div>
    </div>
  )
}

export default App
