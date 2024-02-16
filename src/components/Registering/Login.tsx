import React from 'react'

const Login = () => {
  return (
    <>
        <div className=' h-screen w-screen flex max-sm:flex-row items-center justify-center'>
            <div className=' h-screen w-full bg-red-400 max-sm:hidden flex 
            items-center justify-center '>
                <div className=' flex gap-3 items-end'>
                    <span className='text-white text-6xl'>
                        LOG IN
                    </span>
                    <span className=' text-xl  font-thin' >
                        welcome back ! 
                    </span>
                </div>
            </div>
            <div className=' w-[60vw] h-screen bg-black/0 min-w-[400px] max-sm:min-w-[300px]
            flex items-center justify-center '>
                <div className=' h-[500px] w-[350px] shadow-2xl 
                rounded-md border border-1  max-sm:w-[85vw] overflow-hidden pt-16'>
                    <div className=' h-full w-full flex flex-col px-5 py-10 items-center gap-16 '>
                        <div className=' w-full flex justify-center '>
                            <input className=" w-[85%] outline-none
                                border-b-2 px-4 py-2 font-thin tracking-wider
                                " type="text" placeholder="USERNAME or Email"/>
                        </div>
                        <div className=' w-full flex justify-center '>
                            <input className=" w-[85%] outline-none
                                border-b-2 px-4 py-2 font-thin tracking-wider
                                " type="text" placeholder="PASSWORD"/>
                        </div>
                        <div className=' w-full flex justify-center '>
                            <button className=' px-10 py-3 rounded-3xl 
                            shadow-2xl border hover:shadow-xl transition-all
                            hover:bg-teal-500 hover:text-white active:scale-75
                            '>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login