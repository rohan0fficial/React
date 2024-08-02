import { useState, useCallback, useEffect ,useRef } from 'react'



function App() {
  const [length , setLength] = useState(15)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [ charAllowed , setCharAllowed] = useState(false)
  const [password , setPassword] = useState("")

  //use ref hook
  const passwordRef = useRef(null)

     const passwordGenerator = useCallback(() => {
      // const passwordGenerator = () => {
    let pass = ""
    let Str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) Str+="0123456789"
    if(charAllowed) Str+="!@#$%^&*"
 
    for (let i = 1; i <= length; i++) {
      let char =Math.floor (Math.random() * Str.length +1)
      pass += Str.charAt(char)
    }
    setPassword(pass)

  
   } ,[length , numberAllowed , charAllowed , setPassword])

       
     const copyPasswordToClipboard = useCallback( () => {
       passwordRef.current?.select();
      // passwordRef.current?.setSelectionRange(0,8);
      window.navigator.clipboard.writeText(password)
     },[password])


         useEffect(() =>{
         passwordGenerator()
        // passwordGenerator()
        
        } , [length , numberAllowed , charAllowed , passwordGenerator])


  return (
    <div>
      <div className='w-1/2 rounded-2xl text-center text-2xl text-indigo-100  mx-auto mt-40 shadow-2lg  bg-slate-500 py-5'> 

      <h1 className='text-center text-white mb-3 font-bold'> PASSWORD GENERATOR </h1>

       <div className='flex rounded-lg overflow-hidden mb-4 mx-2 gap-2'>

        <input
        type='text'
        value={password}
        placeholder='password'
        className='outline-none w-full rounded-xl px-1 py-1 text-red-500 text-lg font-bold'
        readOnly
        ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className=' outline-none bg-white px-3 py-0.3 text-red-500 rounded-xl text-lg font-bold'
        >Copy</button>

        </div>

        <div className='flex gap-x-5 text-sm'>

           <div className=' flex item-center gap-x-1 '>
            <input type="range"
            min={5}
            max={50}
            value={length}
            className='cursor-pointer ml-2'
            onChange={(e) => {setLength(e.target.value)}}
             />
             <label className='text-sm  font-bold' >Length:{length}</label>

            </div>

          <div className=' flex item-center gap-x-1 '>
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) != prev)
            }}
             />
             <label htmlFor='numberInput' className='text-sm font-bold ' >Number</label>
            </div>

              
               <div>
                <input
                type='checkbox'
                defaultChecked={charAllowed}
                id='characterInput'
                onChange={() => {
                 setCharAllowed((prev) != prev)
                }}
                />
                <label htmlFor='characterInput' className='text-sm  font-bold' >Character</label>
               </div>

        </div>

        </div>
    </div>
  )
}

export default App




