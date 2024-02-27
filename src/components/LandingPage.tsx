import React, { useEffect } from 'react'

const LandingPage = () => {
  useEffect(()=>{
    setTimeout(()=>{
      window.location.href = "/home"
    },2000)
  })
  return (
    <div className=' w-full h-fit '>
      
    </div>
  )
}

export default LandingPage