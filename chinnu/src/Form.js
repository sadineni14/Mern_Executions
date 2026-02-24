import React from 'react'
 
const Form = () => {
    const[user,setUser]=React.useState("")
    const[age,setAge]=React.useState("")
    const[password,setPassword]=React.useState("")
    const submit=(e)=>{
        e.preventDefault()
        alert("name: "+user+", age: "+age+", password: "+password)
    }
  return (
    <div>
      <form onSubmit={submit}>
        <input type="text" placeholder='User name' value={user} onChange={(e)=>setUser(e.target.value)} />
        <input type="number"  placeholder="age"value={age} onChange={(e)=>setAge(e.target.value)} />
        <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
