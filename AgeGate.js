import { useState } from "react";

export default function AgeGate({ children }) {
  const [ok, setOk] = useState(false);

  if (!ok) {
    return (
      <div style={box}>
        <h1>🔞 Age Verification</h1>
        <p>You must be 21+ to enter</p>
        <button onClick={() => setOk(true)}>I am 21+</button>
      </div>
    );
  }
  return children;
}

const box = {
  height: "100vh",
  background: "#000",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
