import React from 'react'
import { useParams } from 'react-router-dom'

interface currentProps{
    rout : string;
}

const NOTFOUND:React.FC<currentProps> = (props) => {
    const {path} = useParams();
  return (
    <div className=' h-screen w-screen flex items-center 
     flex-col'> 
    <div>
      <img src="https://i.postimg.cc/4yK7wfPY/error-404-1-dark.png" alt="" />
    </div>
      <div className=' text-[1.2rem] flex gap-4 dark:text-white'>
        <p className=' w-fit text-center px-5'>404 : The page you are looking for don't exit</p>
      </div>
      <div className=' text-2xl max-sm:text-md fixed bottom-20 flex gap-2'>
        <span className=' text-indigo-400'>Rout -</span>
        <span className=' text-orange-600 '> {path}</span>
      </div>
    </div>
  )
}

export default NOTFOUND