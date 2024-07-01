import { useState,useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed ] = useState(false);
  const [password,setPassword] = useState("");

  const passwordGenerator = useCallback(()=>{
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    // condition
    if (numberAllowed) str +="0123456789"   
    if (characterAllowed) str +="!@#$%^&*-_+=[]{}~`"
    
    for (let i = 0; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length +1)
      pass = str.charAt(char)
    }

    setPassword(pass)
  }, [length,numberAllowed,characterAllowed,setPassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4' >
          <input 
            className='outline-none w-full py-1 px-3'
            type='text'
            value={password}
            placeholder='Password'
            readOnly
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              className='cursor-pointer'
              type="range" 
              min={6}
              max={100}
              value={length}
              />
              <label>Length</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
