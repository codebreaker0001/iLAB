import { useSelector } from "react-redux";
import React from "react";
import "./visually.css";
import { useEffect, useState } from "react";
import Loading from "../loader/Loading";
<<<<<<< HEAD
import { aiGeneratedForVis } from "../../store/dataSlice";
import LooksFine from "../EverythingFine/LooksFine";
=======
>>>>>>> master

const VisuallyAided = () => {
  const p = useSelector((state) => state.data);
  const data = p.data[1];

  const q = useSelector(state=> state.aiGeneratedForVis);
  const aiGeneratedForVis = q.aiGeneratedForVis[1];
  console.log(q.aiGeneratedForVis[1]);
  
  const [result, setResult] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isFine, setIsFine] = useState(false);

  useEffect(() => {
    setResult(e=>aiGeneratedForVis);
<<<<<<< HEAD
    console.log('vaibhav kis demand: ', aiGeneratedForVis);
    if (aiGeneratedForVis.length) {
      setLoading(false);
    }
    if (aiGeneratedForVis[0] === 0) {
      setIsFine(true);
    }
  }, [result]);
=======
    if (aiGeneratedForVis?.length) {
      setLoading(false);
    }
  }, [aiGeneratedForVis]);
>>>>>>> master
  let i = 0;
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : isFine ?<LooksFine/> :  (
        <>
          <div className="bgVis">
            <h2 className="visHead text-blue-500">Health Advisory</h2>
            {data?.map((tests) => {
              return (
                <div key={tests.__id}>
                  {tests.test_values.map((test) => {
                    return (
                      <div key={test.test_parameter_id}>
                        {test.impression != "N" ? (
                          <>
                            <div className="visContainer flex justify-center items-center">
                              {result[i] && (
                                <fieldset className="indiVis">
                                  <legend className="legendVis">
                                    {result[i]?.body_part} Profile
                                  </legend>
                                  <div className="heading">
                                    <p>Risk involved is {result[i]?.problem}</p>
                                  </div>
                                  <div className="indicator">
                                    <h2 className="testDetail">
                                      {test.parameter_name}:{" "}
                                      {test.parameter_value}
                                      {test.unit != "-" ? test.unit : ""}
                                    </h2>
                                    <div className="levelVis">
                                      {test.impression === "L" ? (
                                        <>
                                          <div className="redCircle"></div>Low
                                        </>
                                      ) : test.impression === "H" ? (
                                        <>
                                          <div className="redCircle"></div>High
                                        </>
                                      ) : (
                                        ""
                                      )}
                                    </div>
                                  </div>
                                  <div className="valueDisplay text-center font-bold">
                                    <div className="lowVal">{`<${test.lower_bound}`}</div>
                                    <div className="normalVal">
                                      {test.lower_bound}-{test.upper_bound}
                                    </div>
                                    <div className="highVal">{`>${test.upper_bound}`}</div>
                                  </div>
                                  {test.parameter_value < test.lower_bound ? (
                                    <div
                                      className="commentYou text-white text-center"
                                      style={{
                                        transform: `translate(${
                                          (test.parameter_value * 193) /
                                            test.lower_bound -
                                          9
                                        }px, 0px)`,
                                      }}
                                    >
                                      <div className="arrow"></div>
                                      You: {test.parameter_value}
                                    </div>
                                  ) : (
                                    <div
                                      className="commentYou text-white"
                                      style={{
                                        transform: `translate(${
                                          391 +
                                          (Math.min(
                                            test.parameter_value -
                                              test.upper_bound,
                                            test.upper_bound
                                          ) *
                                            193) /
                                            test.upper_bound
                                        }px, 0px)`,
                                      }}
                                    >
                                      <div className="arrow"></div>
                                      You: {test.parameter_value}
                                    </div>
                                  )}
                                  <div className="Reason">
                                    <h2 className="subHeading">
                                      Common reason for such result
                                    </h2>
                                    <p>{result[i]?.reason}</p>
                                  </div>
                                  <div className="tipsContainer">
                                    <h2 className="subHeading">
                                      Some Actionable Tips
                                    </h2>
                                    <div className="tips">
                                      {result[i++]?.tips.map((tip) => {
                                        return (
                                          <div key={i} className="tip">
                                            <h3>{tip}</h3>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>
                                </fieldset>
                              )}
                            </div>
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
export default React.memo(VisuallyAided);
