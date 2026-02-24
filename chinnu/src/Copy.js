import React from 'react'

const Copy = () => {
  return (
    <div>
      <p onCopy={()=>alert("Text Copied")}>copy the data </p>
        
        
        <input onPaste={()=>alert("Text Pasted")}/>
        <input defaultValue="cut this" onCut={()=>alert("Text Cut")}/>   
     </div>
  )
}

export default Copy
