import React, { useState } from 'react'

const App = () => {
  const Data=[
    {
      name:"ayush",
      place:"Mumbai"
    },{
      name:"pathak",
      place:"Ahmedabad"
    }
  ]
  const [text,setText]=useState(Data);
  const updateData=()=>{
    setText([
      {
        name:"yo",
        place:"km chho"
      },{
        name:"how are you",
        place:"usa"
      }
    ])
  }
  return (
   <>
   {/* <h1>Array data</h1>
   <p>{text}</p> */}
   {
    text.map((values)=>{
      return(
        <>
        <h2>{values.name}</h2>
        <h2>{values.place}</h2>
      </>
      )
    })
   }
   <button onClick={updateData}>Click Me</button>
   </>  
  )
}

export default App