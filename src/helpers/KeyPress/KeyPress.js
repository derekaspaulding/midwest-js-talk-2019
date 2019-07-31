import React from "react";
import styles from "./KeyPress.module.css";

function KeyPress() {
  let [currentKey, setCurrentKey] = React.useState(null);

  React.useEffect(() => {
    const timeout = setTimeout(() => setCurrentKey(null), 2000);
    return () => clearTimeout(timeout);
  }, [currentKey, setCurrentKey]);

  React.useEffect(() => {
    const keyHandler = event =>
      setCurrentKey(event.key === " " ? "Space" : event.key);
    document.addEventListener("keydown", keyHandler);
  }, []);

  return (
    currentKey && (
      <div className={styles.keylogger}>
        <span>{currentKey}</span>
      </div>
    )
  );
}

export default KeyPress;
