import React, { useState } from 'react';
import './bodyChart.css';

import human from '../../assets/humann.svg'
import Card from '../card/card';
import { useSelector } from 'react-redux';
import Loading from '../loading/Loading';
// import { data } from '../../data';


const BodyChart = () => {

  const pd  = useSelector(state=>state.data);
  const data = pd.data[1];
  console.log(pd.data[1]);


  let obj = [
    {
    },
  ]


  
for (let i = 0; i < data.length; i++) {
  let testName = data[i].test_name;
  console.log(testName);

  let highlightedValues = [];

  for (let j = 0; j < data[i].test_values.length; j++) {
      if (data[i].test_values[j].is_highlighted === true) {
          let highlightedObj = {
              testMethod: data[i].test_values[j].test_method,
              parameterName: data[i].test_values[j].parameter_name,
              parameterValue: data[i].test_values[j].parameter_value
          };
          highlightedValues.push(highlightedObj);
      }
  }

  console.log("Highlighted values for", testName, ":", highlightedValues);

  obj[testName] = highlightedValues;

  console.log("Change");
}

  console.log('nmhbkhj',obj);
  
  
  // Object.keys(obj).map((data)=>{
  //   console.log(data);
  // }) 
  // }

  console.log(obj[2]);


  if (!data) {
    window.location.href = window.location.origin;
    return <Loading/>
  } 

  return (
    <div className='main-body'>
      <div>
        {
          Object.keys(obj).map((testName, index) => (
            <div key={index} className='card'>
              {/* <h2>{testName}</h2> */}
              {/* Debugging */}
              {console.log("Value of obj[testName]: ", obj[testName])}
              {/* End of debugging */}
              {Array.isArray(obj[testName]) && obj[testName].map((highlightedValue, i) => (
                <div key={i} className='highlighted-value'>
                      <Card title={testName} testName={highlightedValue.parameterName} testValue={highlightedValue.parameterValue}  />
                </div>
              ))}
            </div>
          ))
        }
      </div>
  
      <img src={human} alt="Human body with labeled parts" />
  
      

      </div>
   
)  






  
  
};

export default BodyChart;
