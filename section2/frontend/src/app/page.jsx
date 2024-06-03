import React from 'react';
import logo from "./vercel.svg"

const Home = () => {
  return (
    <div>
      <h1 style={{textAlign: "center", fontSize: "24px" }}>Home Page</h1>
      <input type='text' className='bg-slate-200' />
      <input type="text" />
      <button className='my-btn rounded-lg'>Submit</button>

         {/* when file is in public folder */}
      <img src="/next.svg" alt="" />

      {/* when file is outside public folder */}
      <img src={logo.src} alt="" />
    </div>
  )
}

export default Home;