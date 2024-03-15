import React from 'react'
import "./home.css"
import Forms from '../Forms/Forms'

const home = () => {
  return (
    <div className='background absolute w-[100vw] h-screen'>
        <div className='relative top-0 left-0 m-2 w-40 h-16 logo'></div>
        <h1>SmartLab</h1>
        <div className='filter h-[80vh] grid grid-col-1 sm:grid-cols-3 gap-2 m-2'>
            <div className=' flex justify-center items-center sm:col-span-2 bg-sky-700 h-[500px] rounded-xl bg-opacity-40'>
                <Forms/>
            </div>
            <div className='flex justify-center items-center'>
                A Smart and fast way to create lab reports:
                <br />
                home page ki design main nahi karoonga
                <br />
                -vaibhav

            </div>
        </div>
    </div>
  )
}

export default home