import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import { Layout } from './layout.jsx'
import { Route, Routes,RouterProvider , createBrowserRouter, createRoutesFromElements, Form } from 'react-router-dom'
import CoverPage from './component/coverpage/CoverPage.jsx'
import Home from './home/home.jsx'
import LabReport from './component/labReport/LabReport.jsx'
import { data } from './data.js'
import BodyChart from './component/bodyChart/bodyChart.jsx'
import Forms from "./component/Forms/Forms.jsx"


const router = createBrowserRouter(
  createRoutesFromElements(   

    <Route path='' element={<Layout/>}>
      <Route path='/' element={<Forms/>}/>
      <Route path='/coverpage' element={<CoverPage data={data}/>}/>
      <Route path='/labreport' element={<LabReport data={data}/>}/>
      <Route path='/Coverpage' element={<CoverPage data={data}/>}/>     
      <Route path='/bodyChart' element={<BodyChart/>}/>     
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <RouterProvider router={router}/>
  </React.StrictMode>,
)