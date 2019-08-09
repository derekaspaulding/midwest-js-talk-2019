import React from "react";
import LanguageContext, { defaultValue } from "./LanguageContext";
import RenderPropGreeting from "./RenderPropGreeting";
import HooksGreeting from "./HooksGreeting";
import "./App.css";
import StaticContextTypeGreeting from "./StaticContextTypeGreeting";

// live-code-helper:include:start
const App = () => {
  const [language, setLanguage] = React.useState(defaultValue);
  function onSelectChange(event) {
    setLanguage(event.target.value);
  }

  return (
    <div className="context-language">
      <LanguageContext.Provider value={language}>
        <select value={language} onChange={onSelectChange}>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>

        {/* This could be anywhere in the React tree */}
        <HooksGreeting />
        <RenderPropGreeting />
        <StaticContextTypeGreeting />
      </LanguageContext.Provider>
    </div>
  );
};
// live-code-helper:include:end

export default App;
