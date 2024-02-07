import Image from 'next/image'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHippo } from '@fortawesome/free-solid-svg-icons'


interface buttonProps {
    text:string
}

const Button = ({text}: buttonProps) => {
  return (
    
    <button >
        {text}

        
    </button>
    
  )
}

export default Button