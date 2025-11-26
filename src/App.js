import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./componant/Home";
import About from "./componant/About";
import Navbar from "./componant/Navbar";
import Notestate from "./context/Notestate";
import Create_note from "./componant/Create_note";
import Login from "./componant/Login";
import Signup from "./componant/Signup";

function App() {
  return (
    <>
      <Notestate>
        <BrowserRouter>
          <Navbar />
          <div className="container mt-3">
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route exact path="/About" element={<About />} />
          </Routes>
          <Routes>
            <Route exact path="/create_note" element={<Create_note/>} />
          </Routes>
          <Routes>
            <Route exact path="/login" element={<Login/>} />
          </Routes>
          <Routes>
            <Route exact path="/singup" element={<Signup/>} />
          </Routes>
          </div>
        </BrowserRouter>
      </Notestate>
    </>
  );
}

export default App;
