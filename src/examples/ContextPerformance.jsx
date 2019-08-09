import React from "react";

const RandomNumberContext = React.createContext(0);
const mapperArray = new Array(50).fill(0);

const TableElement = () => {
  const number = React.useContext(RandomNumberContext);

  return <td>{number}</td>;
};

const Table = () => (
  <table style={{ fontSize: "10px", fontFamily: "monospace", margin: "auto" }}>
    {mapperArray.map(() => (
      <tr>
        {mapperArray.map(() => (
          <>
            <TableElement />
            <TableElement />
          </>
        ))}
      </tr>
    ))}
  </table>
);

const ContextPerformaceTest = () => {
  const [number, setNumber] = React.useState(0);
  const updateToRandomNumber = () => {
    setNumber(Math.floor(Math.random() * 9));
  };

  return (
    <RandomNumberContext.Provider value={number}>
      <button onClick={updateToRandomNumber}>Set to Random Number</button>
      <Table />
    </RandomNumberContext.Provider>
  );
};

export default ContextPerformaceTest;
