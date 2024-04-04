import React, { useState } from "react";

const ChildComponent = ({ handleClick }) => {
  const [userInput, setUserInput] = useState();

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your message"
        onChange={handleChange}
      />
      <button onClick={() => handleClick(userInput)}>
        Send Message to Parent
      </button>
    </div>
  );
};

export default ChildComponent;
