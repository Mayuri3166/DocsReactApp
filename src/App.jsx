//backgrounnd and foreground 2 components we require for this project

import React from 'react'
import Background from './components/Background';
import Foreground from './components/Foreground';

function App() {
  return (
    <div className='relative w-full h-screen bg-slate-900'> 
    <Background/>
    <Foreground/>
    
    </div>
  )
  
}

export default App