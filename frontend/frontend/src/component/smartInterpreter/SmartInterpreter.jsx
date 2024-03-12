import { useEffect, useState } from "react";
import gen from "./GenerateInt";
import "./Interpreter.css";

const SmartInterpreter = ({ data }) => {
  const arr = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].test_values.length; j++) {
      if (data[i].test_values[j].is_highlighted) {
        arr.push(data[i].test_values[j]);
      }
    }
  }
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].lower_bound == "-" || arr[i].lower_bound == "") {
      continue;
    }
    if (arr[i].parameter_value < arr[i].lower_bound) {
      res.push(["deficiency", arr[i].parameter_name]);
    } else if (arr[i].parameter_value > arr[i].upper_bound) {
      res.push(["High level", arr[i].parameter_name]);
    } else {
      res.push(["", arr[i].parameter_name]);
    }
  }
  const [result, setResult] = useState([]);
  console.log(res);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const para = await gen(res);
        setResult(para);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  let i = 0;
  return (
    <div>
      {data.map((tests) => {
        return (
          <div key={tests.__id}>
            {tests.test_values.map((test) => {
              return (
                <div key={test.test_parameter_id}>
                  {test.is_highlighted ? (
                    <fieldset className="IntContainer">
                      <legend className="IntH1">{tests.test_name}</legend>
                      <div className="IntTestDes">
                        <div>
                          <h3 style={{ margin: "0px" }}>
                            {test.parameter_name}
                          </h3>
                          <h5 style={{ margin: "0px", marginTop: "5px" }}>
                            Method: {test.test_method}
                          </h5>
                        </div>

                        <div>
                          <h4 style={{ margin: "0px", fontWeight: "800" }}>
                            {test.parameter_value}
                            {test.unit != "-" ? test.unit : ""}
                          </h4>
                          <br></br>
                        </div>
                        <div>
                          <h4
                            style={{
                              margin: "0px",
                              fontWeight: "600",
                              textDecoration: "underline",
                              display: "inline",
                            }}
                          >
                            {test.lower_bound > test.parameter_value
                              ? "Deficiency"
                              : test.upper_bound < test.parameter_value
                              ? " Abnormally high level "
                              : ""}
                          </h4>
                          <span>
                            {test.lower_bound != "-"
                              ? `: ${test.lower_bound}-${test.upper_bound}`
                              : ""}
                          </span>
                        </div>
                      </div>
                      <div className="InterpretedPara">{result[i++]}</div>
                    </fieldset>
                  ) : (
                    <></>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export default SmartInterpreter;
