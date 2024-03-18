import { useEffect, useState } from "react";
import React from "react";
import gen from "./GenerateInt";
import "./Interpreter.css";
import { useSelector } from "react-redux";
import Loading from "../loading/Loading";
import LooksFine from "../EverythingFine/LooksFine";


const SmartInterpreter = () => {
  
  const p  = useSelector(state=>state.data);
  const data = p.data[1];
  
  
  const q = useSelector(state => state.aiGeneratedForSmartInt);
  const aiGeneratedForSmartInt = q.aiGeneratedForSmartInt[1];
  console.log(aiGeneratedForSmartInt)
  
  const [result, setResult] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isFine, setIsFine] = useState(false);
  
  useEffect(() => {
    setResult(aiGeneratedForSmartInt);
    if (aiGeneratedForSmartInt.length) {
      setLoading(false);
    }
    
    if(aiGeneratedForSmartInt[0]===0){
      setIsFine(true);
    }
  }, [aiGeneratedForSmartInt]);
  
  let i = 0;
  if (!data) {
    window.location.href = window.location.origin;
    return <Loading/>
  } 
  return (
    <>
      {isLoading ? (
        <Loading />
        ) : isFine ? (
          <LooksFine />
      ) : (
        <div>
          {data.map((tests) => {
            return (
              <div key={tests.__id}>
                {tests.test_values.map((test) => {
                  return (
                    <div key={test.test_parameter_id}>
                      {test.is_highlighted && result[i] ? (
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
                                {test.impression === "L"
                                  ? "Deficiency"
                                  : test.impression === "H"
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
                          <div className="InterpretedPara">
                            {result[i++]?.detail}
                          </div>
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
      )}
    </>
  );
};
export default React.memo(SmartInterpreter);
