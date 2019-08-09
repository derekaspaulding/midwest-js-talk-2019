import React from "react";

// live-code-helper:include:start
const NameInput = ({ setName }) => {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div className="name-picker">
      <label>
        Name
        <input
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
      </label>
      <button
        onClick={() => {
          setInputValue("");
          setName(inputValue);
        }}
      >
        Set Name
      </button>
    </div>
  );
};
// live-code-helper:include:end

export default NameInput;
