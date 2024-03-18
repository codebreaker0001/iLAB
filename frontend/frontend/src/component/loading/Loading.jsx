import React, { useEffect, useState } from 'react';
import './Loading.css';

const Loading = () => {

  const healthTips = [
    "Have Patients, the report is being generated",
    "Stay hydrated by drinking water regularly.",
    "Eat fruits and vegetables for a balanced diet.",
    "Exercise regularly for a healthy body and mind.",
    "Wash your hands frequently to prevent illness.",
    "Get enough sleep to feel rested and energized.",
    "Avoid processed foods and sugary drinks.",
    "Take breaks from screens to reduce eye strain.",
    "Manage stress with meditation or deep breathing.",
    "Limit smoking and alcohol for better health.",
    "Spend time on hobbies for relaxation and joy."
  ];

  const [currentSentence, setCurrentSentence] = useState(healthTips[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Shuffle sentences array
      const shuffledSentences = [...healthTips].sort(() => Math.random() - 0.5);
      // Pick a random sentence from shuffled array
      const randomSentence = shuffledSentences[Math.floor(Math.random() * shuffledSentences.length)];
      setCurrentSentence(randomSentence);
    }, 3000); // Change sentence every 2 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const handleClick = () => {
    window.localStorage.setItem("isLoggedIn", true);
    console.log(window.localStorage.getItem("isLoggedIn"));
    const p = window.location.origin;
    window.location.href = p;
  };

  return (
    <>
    <div className="bg-1"></div>
    <div className="bg"></div>
    <div className="loading-container flex-col">
      <button onClick={handleClick} className='absolute top-0 right-0 m-4 hover:bg-[#309025a8] p-2 rounded-md transition-all'>GetAnotherLabReport</button>
      <div className="loading-circle"></div>
      <p className="healthtips m-8 text-[#071607] transition-all text-xl" >{currentSentence}</p>
    </div>
    </>
  );
}

export default Loading;
