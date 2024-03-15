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
import CoverPage from "./pages/coverpage/CoverPage.jsx";
import Home from "./pages/home/home.jsx";
import LabReport from "./component/labReport/LabReport.jsx";
import { data } from "./data.js";
import BodyChart from "./component/bodyChart/bodyChart.jsx";
import SmartInterpreter from "./component/smartInterpreter/SmartInterpreter.jsx";
import { Provider } from "react-redux";
import Forms from "./pages/Forms/Forms.jsx";
import {store} from "./store/store.js"
import VisuallyAided from "./component/visuallyAided/Visually.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      <Route path="/" element={<Forms />} />
      <Route path="/labreport" element={<LabReport />} />
      <Route path="/Coverpage" element={<CoverPage />} />
      <Route path="/bodyChart" element={<BodyChart />} />
      <Route path="/interpreter" element={<SmartInterpreter />} />
      <Route path="/visualaid" element={<VisuallyAided />} />
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
