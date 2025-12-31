import React from 'react'

const User = (props) => {
    const clr1  =  Math.floor(Math.random()*256)
    const clr2  =  Math.floor(Math.random()*256)

    const clr3  =  Math.floor(Math.random()*256)

  return (
    <div 
    style={{background:`rgb(${clr1} , ${clr2}, ${clr3})`}}
     className='user-card'>
    <h3> {props.ele.name}</h3>
    <p>Email: {props.ele.email}</p>
    <span>  Website:{props.ele.website}</span>
     </div>
  )
}

export default User