import React from 'react'
import { useParams } from 'react-router-dom';
import { DataArr } from '../TempFiles.tsx/TempJSONdata';
import QustionComp from './QustionComp';

interface currentProps{
    uuid : string;
}

const LabSpacePage:React.FC<currentProps> = (props) => {

    const {uuid} = useParams();
    const checkUUID = (element:any) => {
      return element.UUID === uuid;
    };     
    const Data = DataArr.find(checkUUID);

  return (
    <div className=' w-full flex flex-col p-10 gap-5'>
      <div className=''>
        <p className=' text-4xl mb-10'>{Data?.Title}</p>
      </div>
	{
		Data?.Question_Infos.map((ele,idx)=>
			<QustionComp qno={idx+1} type={ele.type} 
			question={ele.question} options={ele.options}/>
		)
	}
		<div className=' flex items-center justify-center w-full mt-10'>
			<div className=' px-5 py-3 border border-1 rounded-full
			 transition-all active:scale-75
			hover:bg-white/20'>
				Submit
			</div>
		</div>
    </div>
  )
}

export default LabSpacePage