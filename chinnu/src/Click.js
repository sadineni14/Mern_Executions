import React from 'react'

const Click = () => {

  const click = () => {
    alert("clicked")
  }

  const dclick = () => {
    alert("double clicked")
  }

  return (
    <div>
      <button onClick={click} onDoubleClick={dclick}>
        Click Me
      </button>

      <button onClick={click} onDoubleClick={dclick}>
        Double Click Me
      </button>
    </div>
  )
}

export default Click
