import React from 'react'
import { useParams } from 'react-router-dom'

interface currentProps{
    rout : string;
}

const NOTFOUND:React.FC<currentProps> = (props) => {
    const {path} = useParams();
  return (
    <div className=' h-screen w-screen flex items-center 
    justify-center'> 
      <div className=' text-5xl flex gap-4 text-white'>
        <span>404</span>
        <span>path - </span>
        <span>{path}</span>
        <span>NOT FOUND</span>
      </div>
    </div>
  )
}

export default NOTFOUND