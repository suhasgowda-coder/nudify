import { useState } from "react";
import axios from "axios";

function Translator() {

  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const translate = async () => {

    const response = await axios.post(
      "http://localhost:5000/api/translator",
      { text }
    );

    setResult(response.data.translated);
  };

  return (

    <div className="container">

      <h1>Translator</h1>

      <input
        type="text"
        placeholder="Enter English Word"
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={translate}>
        Translate
      </button>

      <h2>{result}</h2>

    </div>
  );
}