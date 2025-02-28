import React, {useState} from 'react'
import './PopOut.css';

export const PopOut = () => {
    const [isOpen, setOpen] = useState<Boolean>(false);
    
  return (
    <>
    <button 
    onClick={() =>{setOpen(true)}}
    >Click to show</button>
    <div className={isOpen ? "showPop" : "hidePop"}>HIDDEN OR SHOWING
    <button 
    onClick={() =>{setOpen(false)}}
    >Click to Hide</button>
    </div>
    </>
  )
}
export{}