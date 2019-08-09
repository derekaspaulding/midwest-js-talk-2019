import React from "react";
import LanguageContext from "./LanguageContext";
import Translate from "./Text";

// live-code-helper:include:start
class StaticContextTypeGreeting extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        <h1>I use a static contextType property</h1>
        <span>{Translate(this.context, "greeting")}</span>
      </div>
    );
  }
}
// live-code-helper:include:end

export default StaticContextTypeGreeting;
