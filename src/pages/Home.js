import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome to Kannada Learning App</h1>

      <p>
        Learn Kannada easily from basics to advanced grammar.
      </p>

      <Link to="/alphabets">
        <button style={styles.button}>
          Learn Kannada Alphabets
        </button>
      </Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
  },

  button: {
    padding: "10px 20px",
    fontSize: "18px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};
