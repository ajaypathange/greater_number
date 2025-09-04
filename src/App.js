import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [result, setResult] = useState("");

  const findGreatest = () => {
    if (num1 === "" || num2 === "" || num3 === "") {
      setResult("Please enter all three numbers");
      return;
    }

    const a = parseFloat(num1);
    const b = parseFloat(num2);
    const c = parseFloat(num3);

    let greatest;
    if (a >= b && a >= c) {
      greatest = a;
    } else if (b >= a && b >= c) {
      greatest = b;
    } else {
      greatest = c;
    }

    setResult(`The greatest number is ${greatest}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h1>Greatest of Three Numbers</h1>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
        style={{ padding: "8px", margin: "5px" }}
      />

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
        style={{ padding: "8px", margin: "5px" }}
      />

      <input
        type="number"
        value={num3}
        onChange={(e) => setNum3(e.target.value)}
        placeholder="Enter third number"
        style={{ padding: "8px", margin: "5px" }}
      />

      <br />
      <button onClick={findGreatest} style={{ padding: "8px 12px", marginTop: "10px" }}>
        Find Greatest
      </button>

      <div style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}>
        {result}
      </div>
    </div>
  );
}

export default App;
