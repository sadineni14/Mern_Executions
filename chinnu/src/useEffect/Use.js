import React, { useEffect } from 'react'

const Use = () => {
    useEffect(() => {
        console.log("Loaded")
    }, [])
  return (
    <div>
      <h2>Hello </h2>
    </div>
  )
}

export default Use
