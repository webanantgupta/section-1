"use client";
import React from 'react'

const eventHandling = () => {
  return (
    <div className='px-64' onMouseMove={ (e) => { console.log(e.clientX, e.clientY)}} >
<button
  onClick={ ( ) => {alert ("button was clicked")} }
  className='bg-violet-500 p-4 rounded-lg'>
 Click me</button>


<input onChange={ (event) =>{ (console.log(event.target.value)) } } className='block mt-4 border-2 border-violet-600 p-3 w-full' type="text" />


<input type="color" className='mt-5'
 onChange={ (event) => { document.body.style.backgroundColor =event.target.value}} />


 {/* <input type="file" onChange={ (e) => {console.log(e.target.files) }} /> */}

 <input type="file" multiple onChange={ (e) => {console.log(e.target.files) }} />



</div>
    
  )
}

export default eventHandling;