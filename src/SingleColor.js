import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index,hexColor }) => {
    const [alert, setAlert] = useState(false)
    const bcg = rgb.join(',' )
    const hex=rgbToHex(...rgb)
    const hexvalue=`#${hexColor}`
    useEffect(() => {
      
      return () => {
        const timeout=setTimeout(()=>{
          setAlert(false)
        },3000)
        return ()=>clearTimeout(timeout)
      }
    }, [alert])
    return <article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor:`rgb(${bcg})`}}
      
    onClick={()=>{setAlert(true)
    navigator.clipboard.writeText(hexvalue)}}>
      <p className='percent-value'>{weight}</p>
      <p className='color-value'>{hexvalue}</p>
      {alert && <p className='alert'>copied to clipboard</p> }

    </article>
}

export default SingleColor