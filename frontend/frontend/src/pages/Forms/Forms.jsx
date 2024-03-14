import React, { useEffect, useRef, useState } from 'react'
import axios from "axios"
import LabReport from '../../component/labReport/LabReport';
import { addData } from '../../store/dataSlice';
import { useDispatch, useSelector } from 'react-redux';


const Forms = () => {
  const [booking_id, setBooking_id] = useState();
  const [data, setData] = useState(null);
  const [isFormNeeded, setIsFormNeeded] = useState(true);
  const dispatch = useDispatch();

  const handleSumbit = (e) => {
    e.preventDefault();
    if(booking_id.toString().length == 7)
    setIsFormNeeded(false);

      async function fetchData(){

        await axios.get(`/api/healthData?booking_id=${booking_id}`)
        .then((response)=>{
          setData(e=>response.data);
          dispatch(addData(response.data));

        })
        .catch((error)=>{
          console.log(error)
        })
        // const data = response.json;
        // setData(data);
      }
  
      fetchData();
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setBooking_id(value);
  };

  const [flag, setFlag] = useState(false);

  return (
    <div className='flex justify-center items-center h-[65vh]'>
      <div className='border-4 flex flex-col justify-center items-center w-3/4 h-3/4 rounded-xl border-blue-700'>
          <button className=' bg-blue-700 rounded-xl m-2 text-gray-100 p-3 shadow-sky-400 hover:shadow-none shadow-md w-1/4' >Post Data To API</button>
          <button className=' bg-blue-700 rounded-xl p-3 text-gray-100 w-1/4 m-2 shadow-sky-400 hover:shadow-none shadow-md' onClick={()=>setFlag(!flag)}>Get iLab</button>
      </div>
      {flag &&
      (<div  className='absolute w-80 h-80 flex justify-center items-center bg-black bg-opacity-80 backdrop-blur-sm rounded-md'>
        <button className='absolute top-1 right-2 text-gray-100  w-4 h-4' onClick={()=>setFlag(!flag)}>X</button>
          {isFormNeeded && <form onSubmit={handleSumbit}>
            <label>
              <input className='text-center rounded-sm' placeholder='Enter Booking_id' maxLength='7' id='booking_id' type='text' name='booking_id' value={booking_id} onChange={handleInputChange} pattern='[0-9]*' inputMode='numeric' />
            </label>
            <button type='submit' className=' bg-blue-700 rounded-md text-sm hover:bg-sky-600 active:scale-95 m-1 text-gray-100 p-1  shadow-md'>Submit</button>
          </form>
          }

          {!isFormNeeded && !data && <p className='text-white'>Loading...</p>}
          {!isFormNeeded && data && 
          <p className='text-white'>Congratulations </p>}
      </div>) }
    </div>
  )
}

export default Forms