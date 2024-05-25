import React, { useState } from 'react'
import Blocks from './Blocks'


function Foreground() {

    const data = [
        {
            desc:"Hello This is my very first react project which going to be successful",
            filesize: ".9mbs",
            close: false,
            tag:{isopen: true, tagTitle:"Download Now" ,Tagcolor: "slate-300"}

        },
        {
            desc:"Hello This is my very first react project which going to be successful",
            filesize: ".9mbs",
            close: true,
            tag:{isopen: false, tagTitle:"Download Now" ,Tagcolor: "slate-300"}

        },
        {
            desc:"Hello This is my very first react project which going to be successful",
            filesize: ".9mbs",
            close: true,
            tag:{isopen: true, tagTitle:"Download Now" ,Tagcolor: "slate-300"}

        }
    ];
    useState ()
  return (
    <>
        <div className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item, index) =>(
           <Blocks data={item}/>
        ))}
        </div>
    </>
  )
}

export default Foreground