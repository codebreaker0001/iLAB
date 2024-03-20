import React, { useState } from 'react';
import './bodyChart.css';
import human from '../../assets/humann.svg';
import Card from '../card/card';
import { useSelector } from 'react-redux';

const BodyChart = () => {
  const [hoverPosition, setHoverPosition] = useState({ x: null, y: null });

  const [bodyPart, setBodyPart] = useState('1')
  const pd = useSelector((state) => state.data);
  const data = pd.data[1];
  // console.log(pd.data[1]);


  const q = useSelector((state) => state.aiGeneratedForVis);
  const aiGeneratedForVis = q.aiGeneratedForVis[1];
  console.log(q.aiGeneratedForVis[1]);









  // Create an object to store highlighted values for each test name
  const highlightedValuesByTestName = {};

  for (let i = 0; i < data.length; i++) {
    const testName = data[i].test_name;
    const highlightedValues = [];

    for (let j = 0; j < data[i].test_values.length; j++) {
      if (data[i].test_values[j].is_highlighted === true) {
        highlightedValues.push({
          testName: data[i].test_values[j].parameter_name,
          testValue: data[i].test_values[j].parameter_value
        });
      }
    }




    // Store highlighted values for each test name
    if (highlightedValues.length !== 0) highlightedValuesByTestName[testName] = highlightedValues;
  }

  // console.log(highlightedValuesByTestName);

  const handleMouseMove = (event) => {
    const imageRect = event.target.getBoundingClientRect();
    const offsetX = event.clientX - imageRect.left;
    const offsetY = event.clientY - imageRect.top;
    setHoverPosition({ x: offsetX, y: offsetY });
    cordinateCheck()
  };

  console.log(hoverPosition);

  const handleMouseLeave = () => {
    setHoverPosition({ x: null, y: null });
  };

  // Define the boundaries for triggering the hover effect

  const cordinateCheck = () => {
    if (hoverPosition.x > 146 && hoverPosition.x < 171 && hoverPosition.y > 231 && hoverPosition.y < 251) {
      setBodyPart("lungs")
    }
    else {
      setBodyPart(null)
    }
  }

  const arr = [];
  for (let i = 0; i < data?.length; i++) {
    for (let j = 0; j < data[i].test_values.length; j++) {
      if (data[i].test_values[j].is_highlighted) {
        arr.push(data[i].test_values[j]);
      }
    }
  }

  console.log(arr);

  // console.log(bodyPart);

  const isHoveringOverDesiredArea = (testName ,index) => {
    let num = 0 ;
    if(hoverPosition.x > 146 && hoverPosition.x < 171 && hoverPosition.y > 231 && hoverPosition.y < 251 && testName === "Lipid Profile") return <div key={index} className="hover-overlay" style={{ top: hoverPosition.y, left: hoverPosition.x }}> (<Card title={testName} highlightedValues={highlightedValuesByTestName[testName]} />); </div> 
    else if(hoverPosition.x > 218 && hoverPosition.x < 228 && hoverPosition.y > 253 && hoverPosition.y < 270 && testName === "Kidney Function Test (KFT)") return (<Card title={testName} highlightedValues={highlightedValuesByTestName[testName]} />);
    // return num;
  };

  return (
    <div className='main-body'>
      <div className='container'>
        <div className='left'>
          {Object.keys(highlightedValuesByTestName).slice(0, Math.ceil(Object.keys(highlightedValuesByTestName).length)).map((testName, index) => (
            isHoveringOverDesiredArea(testName ,index)
          ))}
        </div>
        <div className="image-container" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <img src={human} alt="Your Image" />
        </div>
        
      </div>
    </div>
  );
};

export default BodyChart;