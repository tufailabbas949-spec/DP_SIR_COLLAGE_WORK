import { useState } from "react";

function App() {
  const [length, setLength] = useState(10);
  const [password, setPassword] = useState("");
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);

  const generatePassword = () => {
    let chars = "";

    if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_+{}[]<>?/";

    if (chars === "") {
      alert("Please select at least one option");
      return;
    }

    let newPassword = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      newPassword += chars[randomIndex];
    }

    setPassword(newPassword);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert("Password Copied!");
  };

  return (
    <div
      style={{
        width: "500px",
        margin: "50px auto",
        padding: "30px",
        border: "1px solid gray",
        borderRadius: "10px",
       textAlign:'center'

      }}
    >
      <h2>Password Generator</h2>

      <input
        type="text"
        value={password}
        readOnly
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          fontSize: "18px",
        }}
      />

      <button onClick={copyPassword}>Copy</button>

      <br />
      <br />

      <label>Password Length: {length}</label>

      <input
        type="range"
        min="4"
        max="30"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
        style={{ width: "100%" }}
      />

      <br />
      <br />

      <label>
        <input
          type="checkbox"
          checked={uppercase}
          onChange={() => setUppercase(!uppercase)}
        />
        Uppercase
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          checked={lowercase}
          onChange={() => setLowercase(!lowercase)}
        />
        Lowercase
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          checked={numbers}
          onChange={() => setNumbers(!numbers)}
        />
        Numbers
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          checked={symbols}
          onChange={() => setSymbols(!symbols)}
        />
        Symbols
      </label>

      <br />
      <br />

      <button onClick={generatePassword}>Generate Password</button>
    </div>
  );
}

export default App;