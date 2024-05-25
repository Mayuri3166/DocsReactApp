import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { IoClipboard, IoClose } from 'react-icons/io5';
import { motion } from "framer-motion"


function Blocks({data}) {
  return (
    <motion.div drag
    dragConstraints={{
        top: 0,
        right: 700,
        bottom: 400,
        left: 0,
    }}
    dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
    dragElastic={0.5}  whileTap={{ cursor: "grabbing" }} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-slate-700 px-8 py-10 text-white overflow-hidden '>
        <FaRegFileAlt/>
        <p className='text-sm mt-5 font-medium leading-tight'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full  left-0'>
            <div className='flex items-center justify-between  px-8 py-3 mb-3'>
                <h5>{data.filesize}</h5>
                <span className='w-6 h-6 bg-slate-800 rounded-full flex items-center justify-center cursor-pointer'>
                    {data.close ? <IoClose/> : <LuDownload size=".8em"/>}
               
                </span>
            </div>
            {data.tag.isopen ?(
                <div className={'tag w-full py-4 bg-sky-200 flex items-center justify-center'}>
               <h3 className=' cursor-pointer text-sm font-semibold text-zinc-800'>{data.tag.tagTitle}</h3>
                 </div>)
                 :null
             }
            
        </div>
    </motion.div>
  )
}

export default Blocks