import React, { useState } from 'react'

const Test = () => {
    const [state,setState] = useState({width:"40%",transition:"2s ease"})

    const handlerClick = () =>{
        setState({width:"100%",transition:".5s ease"})
    }
  return (
    <>
      <div>
          <input type="text" style ={state} onClick ={handlerClick} />
      </div>
     
    </>
  )
}

export default Test
