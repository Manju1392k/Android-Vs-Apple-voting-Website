/* eslint-disable jsx-a11y/alt-text */

import "./index.css";

import React, { useState } from 'react';

function App() {

  // State for scores.
  const [androidScore, setAndroidScore] = useState(0);
  const [appleScore, setAppleScore] = useState(0);

  // Function to add score for Android. When were the user click's on Android Logo.
  const Android_Score = () => {
    setAndroidScore(androidScore + 1);
  }

  // Function to add score for Apple. When were the user click's on Apple Logo.
  const Apple_Score = () => {
    setAppleScore(appleScore + 1);
  }

  return (
    <div className="App select-none">

      {/* Div for Container. */}
      <div className="Container flex">

        {/* Div for Android Box. */}
        <div className="AndroidBox w-[50vw] h-[100vh] flex justify-center items-center bg-[#37aa56]">
          <div id='Android-Button' className="Circle bg-white rounded-full w-[10rem] h-[10rem] flex justify-center items-center shadow-lg shadow-black hover:invert-[0.15] active:shadow-none cursor-pointer" onClick={Android_Score}>
            <img className="h-[4rem]" src="./Android-Image.svg" alt="Android Logo" />
          </div>
        </div>

        {/* Div for Apple Box. */}
        <div className="Apple w-[50vw] h-[100vh] flex justify-center items-center bg-white">
          <div id='Apple-Button' className="Circle bg-white rounded-full w-[10rem] h-[10rem] flex justify-center items-center shadow-lg shadow-black hover:invert-[0.15] active:shadow-none cursor-pointer" onClick={Apple_Score}>
            <img className="h-[6rem] flex m-auto" src="./Apple-Logo.png" alt="Apple Logo" />
          </div>
        </div>
      </div>

      {/* Div for Result Score Section Box. */}
      <div className="ResultsScoreSectionBox fixed top-0 flex w-[100vw] h-max">

        {/* Div for Android Score. */}
        <div className="w-[50vw] py-4 flex justify-center items-center">
          <h1 className="bg-black py-2 px-4 rounded-md w-max h-max text-white">Android Score: {androidScore}</h1>
        </div>

        {/* Div for Apple Score. */}
        <div className="w-[50vw] py-4 flex justify-center items-center">
          <h1 className="bg-black py-2 px-4 rounded-md w-max h-max text-white">Apple Score: {appleScore}</h1>
        </div>

      </div>

    </div>

  );
}

export default App;
