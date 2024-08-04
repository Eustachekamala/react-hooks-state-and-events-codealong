import React from "react";
import { useState } from "react";

function Toggle() {
  // Declare a new state variable, which we'll call "count with Destructuring array"
  const [isOn, setIsOn] = useState(false)// We're setting the initial state here as false, because the button should be "OFF" by default
  
  // A function to handle the click event of the button
  function handleClick() {
    setIsOn((isOn) => !isOn) // We're setting the state of isOn to the opposite of its current value
  }

  // Return the JSX for the button
  return (
    <button style={{ backgroundColor: isOn ? "#007bff" : "#fff", color: isOn ? "#fff" : "#007bff" }} onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
