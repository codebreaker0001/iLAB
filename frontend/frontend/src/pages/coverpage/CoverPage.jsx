import { useSelector } from "react-redux";
import "./cover.css";
import image from "./img2.jpg";
import logo from "../../../public/logos/logo.png";
import Loading from "../../component/loading/Loading";
const CoverPage = () => {

  const p  = useSelector(state=>state.data);
  const data = p.data[1];

  if (!data) {
    return <Loading/>
  } 
  
  return (
    <div className="backgroundLayer"> 
      <div className="mainContent">
        <div className="Company">
          <div className="logoContainer">
            <img className="logoImg" src={logo}></img>
          </div>
        </div>
        <div className="Title">
          SMART HEALTH <br></br>
          <span style={{ color: "#2e8c64" }}>REPORT</span>
        </div>
        <div className="CoverimgContainer">
          <div className="leftOFIMG">
            An Insigthful Lab Report for better understanding
          </div>
          <img className="image" src={image}></img>
          <div className="rightOFIMG"></div>
        </div>
        <div className="Profile">
          <span style={{ fontStyle: "italic" }}>Prepared for</span>
          <br />
          <span className="name">
            {data[0].customer_name || "Mr Pankaj Singh"} <br />
          </span>
          {/* {data?.gender || "M"} {data?.age || "42"} */}
        </div>
      </div>
    </div>
  );
};
export default CoverPage