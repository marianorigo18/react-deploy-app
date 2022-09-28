import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePages from "./pages/HomePages";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Envios from "./pages/Envios"
class App extends Component {
  state={
    
  }
  render() {
    return (
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Envios />} />
        </Routes>
      </Router>
    );
  }
}
export default App