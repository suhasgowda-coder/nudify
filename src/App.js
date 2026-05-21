import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Alphabets from "./pages/Alphabets";
import Grammar from "./pages/Grammar";
import Translator from "./pages/Translator";
import Quiz from "./pages/Quiz";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/alphabets" element={<Alphabets />} />

        <Route path="/grammar" element={<Grammar />} />

        <Route path="/translator" element={<Translator />} />

        <Route path="/quiz" element={<Quiz />} />

        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}