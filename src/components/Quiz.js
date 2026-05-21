import { useEffect, useState } from "react";
import axios from "axios";

function Quiz() {

  const [quiz, setQuiz] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:5000/api/quiz")
      .then((res) => setQuiz(res.data));

  }, []);

  return (

    <div className="container">

      <h1>Quiz</h1>

      {quiz.map((q, index) => (

        <div className="card" key={index}>

          <h3>{q.question}</h3>

          {q.options.map((opt, i) => (
            <button key={i}>{opt}</button>
          ))}

        </div>

      ))}

    </div>
  );
}