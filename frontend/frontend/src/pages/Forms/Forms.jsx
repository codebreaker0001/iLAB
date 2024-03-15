import React, { useEffect, useRef, useState } from 'react'
import axios from "axios"
import LabReport from '../../component/labReport/LabReport';
import { addData } from '../../store/dataSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../component/loader/Loading';

const Forms = () => {
  const [booking_id, setBooking_id] = useState();
  const [isFormNeeded, setIsFormNeeded] = useState(true);

  const handleSumbit = (e) => {
    e.preventDefault();

    if(booking_id.toString().length == 7)
    setIsFormNeeded(false);

    window.localStorage.setItem('isLoggedIn', false);
    window.localStorage.setItem('booking_id', booking_id);

    location.reload();
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setBooking_id(value);
  };

  useEffect(() => {
    if (!isFormNeeded) {
      window.localStorage.setItem('isLoggedIn', false);
      location.reload();
      
    }
  }, [isFormNeeded]);

  const [flag, setFlag] = useState(false);

  return (
    <div className='flex justify-center items-center h-full w-full'>
      <div className='border-4 flex flex-col justify-center items-center w-5/6 h-5/6 rounded-xl border-blue-700'>
          <button className=' bg-blue-700 rounded-xl m-2 text-gray-100 p-3 shadow-sky-400 hover:shadow-none shadow-md w-full sm:w-2/4' >Post Data To API</button>
          <button className=' bg-blue-700 rounded-xl p-3 text-gray-100 m-2 shadow-sky-400 hover:shadow-none shadow-md w-full sm:w-2/4' onClick={()=>setFlag(!flag)}>Get iLab</button>
      </div>
      {flag &&
      (<div  className='absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-80 backdrop-blur-sm rounded-md'>
        <div className='relative bg-white h-40 flex justify-center items-center p-8 rounded-xl'>
          <button className='absolute top-2 right-2 text-black w-4 h-4' onClick={()=>setFlag(!flag)}>X</button>
            {isFormNeeded && <form onSubmit={handleSumbit}>
              <label>
                <h2>Get your LabReport</h2>
                <input className='text-center bg-gray-100 border h-8 rounded-md' placeholder='Enter Booking_id' maxLength='7' id='booking_id' type='text' name='booking_id' value={booking_id} onChange={handleInputChange} pattern='[0-9]*' inputMode='numeric' />
              </label>
              <button type='submit' className=' bg-blue-700 rounded-md text-sm hover:bg-sky-600 active:scale-95 m-1 text-gray-100 p-1  shadow-md'>Submit</button>
            </form>
            }

            {/* {!isFormNeeded && !data && <Loading/>}
            {!isFormNeeded && data && 
            <p className='text-black'>
              <div>
              </div>
            </p>} */}

        </div>
      </div>) }
    </div>
  )
}

export default Forms