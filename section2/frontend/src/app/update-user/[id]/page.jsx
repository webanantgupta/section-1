"use client"
import { useParams } from 'next/navigation';
import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';

const updatUser = () => {

  const {id} = useParams();

 const fetchUserData = () => {
    axios.get("http://localhost:5000/user/getbyid/" +id)
    .then((result) => {
      console.log(result.data); 
    }).catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => { 
    fetchUserData();
  }, [])
  return (
    <div>updatUser
    <p>{id}</p>
    </div>
  )
}

export default updatUser;