import { useSelector } from "react-redux";
import React from "react";
import "./visually.css";
import { data } from "../../data";
import genVis from "./generativeAi";
import { useEffect, useState } from "react";

const VisuallyAided = () => {
  // const p = useSelector((state) => state.data);
  // const data = p[1];

  const arr = [];
  for (let i = 0; i < data?.length; i++) {
    for (let j = 0; j < data[i].test_values.length; j++) {
      if (data[i].test_values[j].is_highlighted) {
        arr.push(data[i].test_values[j]);
      }
    }
  }
  const res = [];
  for (let i = 0; i < Math.min(15, arr.length); i++) {
    if (arr[i]?.lower_bound == "-" || arr[i]?.lower_bound == "") {
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (res.length) {
          const para = await genVis(res);
          setResult(para);
          console.log(para);
        } else {
          console.error("No data found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  let i = 0;
  return (
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
                              <p>{result[i]?.problem}</p>
                            </div>
                            <div className="indicator">
                              <h2 className="testDetail">
                                {res[i][1]}: {test.parameter_value}
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
                                      test.parameter_value - test.upper_bound,
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
  );
};
export default React.memo(VisuallyAided);
