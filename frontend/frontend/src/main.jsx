import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { Layout } from "./layout.jsx";
import {
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import CoverPage from "./component/coverpage/CoverPage.jsx";
import Home from "./home/home.jsx";
import LabReport from "./component/labReport/LabReport.jsx";
import { data } from "./data.js";
import BodyChart from "./component/bodyChart/bodyChart.jsx";
import SmartInterpreter from "./component/smartInterpreter/SmartInterpreter.jsx";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import Forms from "./component/Forms/Forms.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      <Route path="/" element={<Forms/>} />
      <Route path="/labreport" element={<LabReport />} />
      <Route path="/Coverpage" element={<CoverPage data={data} />} />
      <Route path="/bodyChart" element={<BodyChart />} />
      <Route path="/interpreter" element={<SmartInterpreter data={data} />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
