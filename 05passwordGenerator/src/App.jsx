import { useCallback, useEffect, useRef, useState } from "react"


function App() {

  let [length, setLength] = useState(8)
  let [numAllowed, setNumAllowed] = useState(false)
  let [charAllowed, setCharAllowed] = useState(false)
  let [password, setPassword] = useState("")

  let passwordRef = useRef(null)

  let passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str = str + "0123456789"
    if(charAllowed) str = str + "!@#$%^&*-_+=[]{}~`"

    for(let i=1; i<=length; i++){
      let ind = Math.floor(Math.random()*str.length)
      pass = pass + str.charAt(ind)
    }

    setPassword(pass)
  } , [length, numAllowed, charAllowed, setPassword])

  let copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg bg-gray-800 text-orange-500 px-4 py-3 my-8">

        <h1 className='text-3xl text-center text-white my-3'>Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="Password" readOnly ref={passwordRef}/>
          <button className="outline-none bg-blue-700 text-white px-3 py-1 shrink-0" onClick={copyPasswordToClipBoard}>copy</button>
        </div>

        <div className="flex text-sm gap-x-2">

          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={100} value={length} className="cursor-pointer" onChange={(e) => {setLength(e.currentTarget.value)}}/>
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" id="numberInput" defaultChecked={numAllowed} onChange={() => {
              setNumAllowed((prev) => !prev)
            }}/>
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" id="characterInput" defaultChecked={charAllowed} onChange={() => {
              setCharAllowed((prev) => !prev)
            }}/>
            <label htmlFor="characterInput">Characters</label>
          </div>
          
        </div>

      </div>
    </>
  )
}

export default App

