import React from "react";
import { CodePane, Layout, Fill, Fit } from "spectacle";

export const INCLUDE_START = "live-code-helper:include:start";
export const INCLUDE_END = "live-code-helper:include:end";

function formatSource(source) {
  const sourceLines = source.split("\n");

  let includeLines = sourceLines.reduce((lineIndicies, currentLine, index) => {
    if (currentLine.includes(INCLUDE_START)) {
      lineIndicies.push(index + 1);
    }
    return lineIndicies;
  }, []);

  let excludeLines = sourceLines.reduce((lineIndicies, currentLine, index) => {
    if (currentLine.includes(INCLUDE_END)) {
      lineIndicies.push(index);
    }
    return lineIndicies;
  }, []);

  if (includeLines.length === 0) {
    includeLines = [0];
  }

  if (excludeLines.length === 0) {
    excludeLines = [sourceLines.length];
  }

  const groupPairs = includeLines.map((includeIndex, index) => {
    const excludeIndex = excludeLines[index] || sourceLines.length;
    return [includeIndex, excludeIndex];
  });

  const includedLines = groupPairs.reduce((lines, pair) => {
    return [...lines, ...sourceLines.slice(pair[0], pair[1])];
  }, []);

  console.log(groupPairs);

  return includedLines.join("\n");
}

const LiveCode = ({ children, rawCode, lang, textSize }) => {
  return (
    <Layout style={{ alignItems: "center" }}>
      <Fill>
        <CodePane
          lang={lang}
          theme="external"
          textSize={textSize}
          source={formatSource(rawCode)}
        />
      </Fill>
      <Fit
        style={{
          marginLeft: "20px"
        }}
      >
        {children}
      </Fit>
    </Layout>
  );
};

export default LiveCode;
