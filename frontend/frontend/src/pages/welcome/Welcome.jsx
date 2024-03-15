import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import axios from 'axios'
import { addData } from '../../store/dataSlice';

const Welcome = () => {

    const booking_id = window.localStorage.getItem('booking_id');
    const dispatch = useDispatch();

    
    useEffect( ()=>{
      async function fetchData(){

        await axios.get(`/api/healthData?booking_id=${booking_id}`)
        .then((response)=>{
          console.log("response data: ", response.data);
          dispatch(addData(response.data));
        })
        .catch((error)=>{
          console.log(error)
        })
      }
  
      fetchData();
    }
    ,[booking_id, dispatch]);

  return (
    <div>Welcome</div>
  )
}

export default Welcome