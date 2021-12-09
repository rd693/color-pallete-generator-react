import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#f2f2f2').all(10))
  const handleSubmit=(e)=>{
   e.preventDefault()
    try {
       let colors=new Values(color).all(10)
    setList(colors)
    } catch (error) {
      setError(true)
      console.log(error);
    }
   


  }
  return <>
  <section className='container'>
    <h3>Color Pallete Generator</h3>
    <form onSubmit={handleSubmit}>
      <input type="text" value={color}
       
       placeholder='#f2f2f2' 
       onChange={(e)=>setColor(e.target.value)}
       className={`${error?'error': null}`}/>
    <button className='btn' type='submit'>Submit</button>
    </form>
    </section>
    <section className='colors'>
      {list.map((color,index)=>{
        const hex=color.hex
        return <SingleColor key={index} {...color}
         index={index} hexColor={color.hex}/>
      })}
    </section>
    </>
}

export default App
