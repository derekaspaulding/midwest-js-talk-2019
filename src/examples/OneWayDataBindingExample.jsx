import React from "react";

// live-code-helper:include:start
function Inputs() {
  const [values, setValues] = React.useState({ in: 0, cm: 0 });

  const handleInchesChange = e => {
    values.in = e.target.value;
    values.cm = parseFloat(e.target.value, 10) * 2.54;
  };

  const handleCentimetersChange = e =>
    setValues({
      in: parseFloat(e.target.value, 10) / 2.54,
      cm: e.target.value
    });

  return (
    <div className="inputs">
      <h2>Does Not Work 😡</h2>
      <label>
        Inches
        <input type="number" value={values.in} onChange={handleInchesChange} />
      </label>
      <h2>Works! 🙌</h2>
      <label>
        Centimeters
        <input
          type="number"
          value={values.cm}
          onChange={handleCentimetersChange}
        />
      </label>
    </div>
  );
}
// live-code-helper:include:end

export default Inputs;
