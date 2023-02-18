import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { Auth } from "./components/Auth";
import News from "./components/News";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
      <Navbar/>
      <div className="App">
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
