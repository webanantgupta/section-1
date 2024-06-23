"use client"
import { useParams } from 'next/navigation';
import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { Formik } from 'formik';

const updatUser = () => {

  const { id } = useParams();
  const [userData, setuserData] = useState(null);

  const fetchUserData = () => {
    axios.get("http://localhost:5000/user/getbyid/" + id)
      .then((result) => {
        console.log(result.status);
        console.log(result.data);
        setuserData(result.data);
      }).catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchUserData();
  }, [])


  // function
  const submitForm =(values) => {
   console.log(values);
  }
  return (
    <div className='max-w-2xl mx-auto py-5 '>

      <h1 className='text-3xl text-center font-bold'>Update User</h1>

      <div className='border-2  bg-zinc-400 rounded-xl p-6 mt-10'>
        {/* initalize formik according to condition */}


       { userData!==null ? 


        <Formik initialValues={userData} onSubmit={submitForm}>

          {
            (updateForm) => {
              return <form onSubmit={updateForm.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  onChange={updateForm.handleSubmit}
                  value={updateForm.values.name}
                  id="name"
                  className='bold bg-slate-200 w-full mt-1 mb-3 py-2 px-3 rounded-md outline-none' />

                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  onChange={updateForm.handleSubmit}
                  value={updateForm.values.email}
                  id="email"
                  className='bold bg-slate-200 w-full mt-1 mb-3 py-2 px-3 rounded-md outline-none' />

                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  onChange={updateForm.handleSubmit}
                  value={updateForm.values.password}
                  id="password"
                  className='bold bg-slate-200 w-full mt-1 mb-3 py-2 px-3 rounded-md outline-none' />

                <label htmlFor="city">City</label>
                <input
                  type="text"
                  onChange={updateForm.handleSubmit}
                  value={updateForm.values.city}
                  id="email"
                  className='bold bg-slate-200 w-full mt-1 mb-3 py-2 px-3 rounded-md outline-none' />

                <div className='text-center'>
                  <button className='my-5 py-3 px-5 bg-blue-600 hover:bg-blue-400 hover:text-black text-white rounded-xl w-6/12 '>Submit</button></div>


              </form>
            }
          }

        </Formik>

        : <p>Loading...</p>}


      </div>

    </div>
  )
}

export default updatUser;