import React from 'react'
import StarIcon from '../Icons/Utilities/StarIcon'
import { DataArr } from '../TempFiles.tsx/TempJSONdata'

const DemoPage:React.FC = () => {
    const Data = DataArr;

    const redirect_to = (uuid:string) =>{
        window.location.href = '/labspace/'+uuid;
    }

  return (
    <div className=' w-screen min-h-screen  bg-slate-400/0 
    flex p-10 max-sm:p-4'>
        <div className=' __Outer__ w-full flex flex-col gap-6'>
            <div className=' h-10 p-2 w-fit bg-[#4f61bb] text-white rounded-lg mb-6'>
                Avialable Tasks
            </div>
           <div className=' flex flex-col gap-5 max-h-[70vh] 
         p-5 overflow-y-auto'>
                {
                    Data.map((ele,idx)=>
                    <div onClick={()=>{redirect_to(ele.UUID)}} key={"snorev_"+idx}
                     className='  w-[90%] max-sm:w-[100%] h-fit max-sm:h-[300px]
                    rounded-lg bg-white shadow-md transition-all hover:shadow-lg 
                    hover:cursor-pointer active:scale-95 
                   dark:bg-[#282828] p-4 relative'>
                       <div className=''>
                           <p className=' text-2xl mb-2'>{ele.Title}</p>
                           <div className=' flex gap-6 max-sm:flex-wrap max-sm:gap-1'>
                               <div className=' flex items-center gap-3 font-thin mr-3'>
                                   &#x2022;
                                   <span className=' text-[#a9a4a4]'>Question count </span>
                                   <span className=' text-xl'>{ele.No_of_questions}</span>
                               </div> 
                               <div className=' flex gap-3 items-center justify-center font-thin mr-3'>
                                   &#x2022;
                                   <span className=' text-[#a9a4a4]'>Zoner</span>
                                   <span className=' text-xl'>{ele.Zoner}</span>
                               </div>
                               <div className=' flex gap-3 items-center font-thin mr-3'>
                                   &#x2022;
                                   <span className=' text-[#a9a4a4]'>Responces</span>
                                   <div className=' flex gap-1 text-lg'>
                                       <span>{ele.CurrentRes}</span>
                                       <span>/</span>
                                       <span>{ele.RequiredRes}</span>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className=' absolute top-[-7px] z-10 right-[-10px] 
                       fill-yellow-500 drop-shadow-2xl animate-bounce'>
                           <StarIcon/>
                       </div>
                   </div>
                    )
                }
           </div>
        </div>
    </div>
  )
}

export default DemoPage