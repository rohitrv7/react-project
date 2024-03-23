import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberallow] = useState(false)
  const [characterAllow, setCharacterallow] = useState(false)
  const [password, setPassword] = useState("")

  const passgenerator = useCallback( ()=>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numberAllow) str=+'0123456789'
    if(characterAllow) str+'!@#$%^&*()_+'

    for( let i = 1; i<=length; i++){
      let char = Math.floor(Math.random()* str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllow, characterAllow, setPassword] )

  useEffect(() => {
    passgenerator()
  }, [length, numberAllow, characterAllow,  passgenerator]) 

  return (
    <div className="w-full h-screen p-20 border-zinc-100 bg-black">
      <div className="p-4 flex justify-center border rounded-lg bg-slate-400">
        {/* <h1 className='py-3 text-center text-2xl'>Password  Generator</h1> */}
        <input
         type="text" 
         className='border-zinc-100 px-4 py-2 rounded-l-lg border outline-none'
         placeholder='Password'
         readOnly
         />
         <button
         className='outline-none bg-blue-500 rounded-r-lg text-white px-3 py-1 shrink-0'
         >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          id='range'
          name='range'
          value={length}
          className='cursor-pointer outline-none'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label className='text-white'>Length : {length} </label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked= {numberAllow}
          id='number'
          onClick={()=>{
            setNumber(prev => !prev);
          }}
          />
          <label htmlFor="number" className='text-white'>Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked= {characterAllow}
          id='character'
          onClick={()=>{
            setCharacter((prev)=>!prev);
          }}
          />
          <label htmlFor="character" className='text-white'>Character</label>
        </div>
      </div>
    </div>
    
  )
}

export default App
