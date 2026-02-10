import React,{useState} from 'react'
import './Name.css'

const Name = () => {
  const [Name, setName] = useState("")

  return (
    <div className="chinnu">
      <input type="text" placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} />
      <h1>My Name is {Name}</h1> 
      <button onClick={() => setName("")}>Reset</button>   
    </div>
  )
}

export default Name
