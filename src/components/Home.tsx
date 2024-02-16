import React from 'react'
import { useParams } from 'react-router-dom';


interface id{
    id:string
}

const Home:React.FC<id> = (props) => {
    const {id} = useParams() 
  return (
    <div className=' h-screen w-screen flex items-center justify-center'>
      <div className=' text-4xl dark:text-white
       max-sm:text-2xl hover:cursor-pointer
      clear-start flex gap-4'>
        <span className=' hover:scale-110 transition-all'>Welcome</span>
        <span className=' hover:scale-110 transition-all text-[#fff]'>" {id} "</span>
        </div>
    </div>
  )
}

export default Home