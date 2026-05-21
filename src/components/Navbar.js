import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="navbar">

      <h2>Nudify</h2>

      <div>

        <Link to="/">Home</Link>

        <Link to="/alphabets">Alphabets</Link>

        <Link to="/grammar">Grammar</Link>

        <Link to="/translator">Translator</Link>

        <Link to="/quiz">Quiz</Link>

        <Link to="/dashboard">Dashboard</Link>

      </div>

    </nav>
  );
}