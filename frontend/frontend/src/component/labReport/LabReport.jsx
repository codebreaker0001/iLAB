import "./labReport.css";
import logo from "./logo.png";
// import { data } from "../../data";
const LabReport = ({ data }) => {


  return (
    <div>
      {/* <header></header> */}
      <h1>Laboratory Report</h1>
      <div className="profile">
        <span>
          Name: <strong>{data[0].customer_name}</strong>
        </span>

        <span>Booking Date: {data[0].booking_date.slice(0, 10)}</span>
        <div className="imgContainer">
          <img src={logo}></img>
        </div>
        <span>Customer ID: {data[0].lead_id}</span>
        <span>Booking ID: {data[0].booking_id}</span>
      </div>
      <div className="header"></div>
      {data.map((obj) => {
        return (
          <div key={obj._id} className="tests">
            <h3 className="testName">{obj.test_name}</h3>
            <div className="subTest">
              <span className="header">Test Description</span>
              <span className="header">Value(s)</span>
              <span className="header">Unit(s)</span>
              <span className="header">Reference Range</span>
              {obj.test_values.map((test) => {
                return (
                  <>
                    {test.is_highlighted ? (
                      <div>
                        <span className="highlighted">
                          {test.parameter_name}
                        </span>
                        <br></br>
                        {test.test_method && (
                          <span className="method">
                            Method: {test.test_method}
                          </span>
                        )}
                      </div>
                    ) : (
                      <div>
                        <span className="paraName">
                          {" "}
                          {test.parameter_name}{" "}
                        </span>
                        <br></br>
                        {test.test_method && (
                          <span className="method">
                            Method: {test.test_method}
                          </span>
                        )}
                      </div>
                    )}

                    {test.is_highlighted ? (
                      <span className="highlighted">
                        {test.parameter_value}
                      </span>
                    ) : (
                      <span> {test.parameter_value} </span>
                    )}

                    <span> {test.unit} </span>
                    <span>
                      {" "}
                      {test.lower_bound}-{test.upper_bound}{" "}
                    </span>
                  </>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default LabReport;
