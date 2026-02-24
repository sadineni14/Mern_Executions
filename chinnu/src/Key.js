import React from 'react'

const Key = () => {
    const keydown = (e) => {
        if(e.key === "Enter"){
            alert("Enter Key Pressed")
        }
    }

    const keyup = (e) => {
        if(e.key === ""){
            alert("Alt Key Released")
        }
    }
  return (
    <div>
      <input onKeyDown={keydown}/>
      <input onKeyUp={keyup}/>
      <h2 onMouseEnter={()=>alert("Mouse Entered")}>HI CHINNU 
      </h2>
      <h2 onMouseLeave={()=>alert("Mouse Left")}>BYE CHINNU</h2>
    </div>
  )
}

export default Key
