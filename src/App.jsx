import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {

  // variables
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed ] = useState(false);
  const [password,setPassword] = useState("");
  
  // useRef
  const passwordRef = useRef(null)

  // funtion to genrate password
  const passwordGenerator = useCallback(()=>{
    // local variable
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    // condition cheak
    if (numberAllowed) str +="0123456789"   
    if (characterAllowed) str +="!@#$%^&*-_+=[]{}~`"
    
    for (let i = 0; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
    }
    // pass value show in update passwor filed
    setPassword(pass)
  }, [length,numberAllowed,characterAllowed,setPassword])

  // Copy to clipboard 
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(1,9)
    window.navigator.clipboard.writeText(password)
  },[password])

  // Run while page serve to the clinte or refrace 
  useEffect(()=>{
    // Call Funtion Password Genrate
    passwordGenerator()
  },[length,numberAllowed,characterAllowed,passwordGenerator])
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
            ref={passwordRef}
          />
          <button 
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 hover:bg-green-700 text-white px-3 py-0.5 shrink-0' >
              copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              className='cursor-pointer'
              type="range" 
              min={6}
              max={100}
              value={length}
              onChange={(e)=>{setLength(e.target.value)}}
              />
              <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1' >
            <input
              type='checkbox'
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={()=>{
                setNumberAllowed((prev)=> !prev);
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input
              type='checkbox'
              defaultChecked={characterAllowed}
              id='characterInput'
              onChange={()=>{
                setCharacterAllowed((prev)=> !prev);
              }}
            />
            <label htmlFor='numberInput'>Special Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
