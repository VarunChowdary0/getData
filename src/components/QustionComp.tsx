import React, { useState } from 'react'

interface currentProps{
    question : string,
    options : string[]|undefined,
    type : string,
    qno : number;
}

const QustionComp:React.FC<currentProps> = (props) => {
    const [currentRes,setCurrentRes] = useState<number>();
  return (
    <>
        <div className=' __Questions__  flex flex-col'>
        <div className=' h-fit w-full dark:bg-[#282828]
		 flex flex-col gap-4
		rounded-xl p-4'>
          <div className=' flex items-center gap-3 relative'>
                <span className=' text-white/70 tracking-widest'>Q{props.qno} .</span>
                <p className=' font-thin'>
                  {props.question}
                </p>
                {
                    currentRes!==undefined &&
                    <div onClick={()=>{
                        setCurrentRes(undefined);
                    }} className=' absolute right-6 px-3 
                    py-1 rounded-full bg-black'>clear</div>
                }
          </div>
		  <div className=' _Options_ px-10 flex flex-col gap-3 relative'>
                { 
                props.options !== undefined &&
                    props.options.map((ele,idx)=>
                    <div key={"option_"+idx} 
                    onClick={()=>{
                        setCurrentRes(idx);
                    }}
                    className=' hover:cursor-pointer flex gap-5 items-center'>
                        <div className=' h-5 w-5 rounded-2xl bg-white flex items-center justify-center'>
                            {currentRes===idx && <div className=' h-3 w-3 
                            bg-blue-500 rounded-full'></div>}
                        </div>
                        <p>{ele}</p>
                    </div>
                    )
                }
                </div>
            </div>
       </div>
    </>
  )
}

export default QustionComp