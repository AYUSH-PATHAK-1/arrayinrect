import React, { useState } from 'react'

const App = () => {
 const[text,setText]=useState(
  {
    name:"ayush",
    place:"ahmedabad",
    laguage:"ReactJS"
  }
 );
 const updatedata=()=>{
  setText({...text,name:"ayush pathak",
  })
 }
    
  return (
   <>
   <div className="container">
  <h1>{text.name}</h1>
  <h1>{text.place}</h1>
  <h1>{text.laguage}</h1>
  <button onClick={updatedata} className="btn btn-dark">Click Me</button>
  </div>

   
   </>  
  )
}

export default App