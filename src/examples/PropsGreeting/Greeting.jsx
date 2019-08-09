import React from "react";
import NameInput from "./NameInput";
import "./Greeting.css";

// live-code-helper:include:start
const Greeting = () => {
  const [greetingName, setGreetingName] = React.useState("");
  return (
    <div className="greeting">
      <h1>Hello, {greetingName === "" ? "World!" : `${greetingName}!`}</h1>
      <NameInput setName={setGreetingName} />
      <button onClick={() => setGreetingName("")}>Clear Name</button>
    </div>
  );
};
// live-code-helper:include:end

export default Greeting;
