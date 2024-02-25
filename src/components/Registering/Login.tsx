import React, { useState } from 'react'
import EyeIcon from '../../Icons/Utilities/EyeIcon';
import EyeSlashIcon from '../../Icons/Utilities/EyeSlashIcon';

const Login = () => {

    const [username,setUsername] = useState<string>("");
    const [password,setPassword] = useState<string>("");

    const [showPwd,setShowPwd] = useState<boolean>(false); 

    const handleSubmitLogin=()=>{
        const dataObj = {
            username,
            password
        }
        console.log(dataObj);
    }

    const HandleshowPwd = () =>{
        setShowPwd(true);
        setTimeout(()=>{
            setShowPwd(false);
        },1200);
    }

  return (
    <>
        <div className=' h-screen w-screen flex max-sm:flex-row items-center justify-center'>
            <div className=' h-screen w-full dark:bg-[#606081] bg-red-400 max-sm:hidden flex 
            items-center justify-end pr-10 
            bg-[url("https://lh3.googleusercontent.com/8Fp2LXKxuvsSpM-E632AFMbblGBVTUxJuCHF2Y2Z78AZZeb8RDnWYAAQAskZNx3eufUrnaCnl-3P4XuE2cKRldkq_AMuzewyh68Sow=w1064-v0")] '>
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
                <div className=' h-[500px] w-[350px] shadow-2xl dark:bg-[#282828]
                rounded-md border border-1  dark:border-0 max-sm:w-[85vw] overflow-hidden pt-16'>
                    <div className=' h-full w-full flex flex-col px-5 py-10 items-center gap-16 tracking-wider'>
                        <div className=' w-full flex justify-center '>
                            <input className=" w-[85%] outline-none bg-black/0
                                border-b-2 px-4 py-2 font-thin tracking-wider
                                " type="text" value={username} 
                                onChange={(e)=>{
                                    setUsername(e.target.value);
                                }}
                                 placeholder="USERNAME or Email"/>
                        </div>
                        <div className=' relative w-full flex justify-center '>
                            <input className=" w-[85%] outline-none bg-black/0
                                border-b-2 px-4 py-2 font-thin tracking-wider
                                " type=
                                {showPwd?"text":"password"}
                                value={password}
                                onChange={e=>{
                                    setPassword(e.target.value)
                                }}
                                 placeholder="PASSWORD"/>
                            <div onClick={HandleshowPwd} className=' absolute right-10 bottom-4 
                             fill-[#b7b7b7]
                            dark:fill-white'>
                                {
                                    showPwd ? 
                                    <EyeIcon/>
                                    :
                                    <EyeSlashIcon/>
                                }
                            </div>
                        </div>
                        <div className=' w-full flex justify-center '>
                            <button onClick={handleSubmitLogin}
                             className=' px-10 py-3 rounded-3xl dark:text-gray-500
                            shadow-2xl border hover:shadow-xl transition-all
                            hover:bg-teal-500 hover:text-white dark:hover:text-white
                             active:scale-75
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