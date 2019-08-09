import React from "react";
import LanguageContext from "./LanguageContext";
import Translate from "./Text";

// live-code-helper:include:start
class RenderPropGreeting extends React.Component {
  render() {
    return (
      <LanguageContext.Consumer>
        {language => (
          <div>
            <h1>I use a render prop:</h1>
            <span>{Translate(language, "greeting")}</span>
          </div>
        )}
      </LanguageContext.Consumer>
    );
  }
}
// live-code-helper:include:end

export default RenderPropGreeting;
