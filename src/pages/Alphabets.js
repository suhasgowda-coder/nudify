function Alphabets() {

  const letters = [
    "ಅ", "ಆ", "ಇ", "ಈ", "ಉ", "ಊ"
  ];

  return (

    <div className="container">

      <h1>Kannada Alphabets</h1>

      <div className="card-grid">

        {letters.map((letter, index) => (

          <div className="card" key={index}>
            {letter}
          </div>

        ))}

      </div>

    </div>
  );
}

