import React from "react";
import LanguageContext from "./LanguageContext";
import Translate from "./Text";

// live-code-helper:include:start
const HooksGreeting = () => {
  const language = React.useContext(LanguageContext);

  return (
    <div>
      <h1>
        I use the <code>useContext</code> hook
      </h1>
      <span>{Translate(language, "greeting")}</span>
    </div>
  );
};
// live-code-helper:include:end

export default HooksGreeting;
