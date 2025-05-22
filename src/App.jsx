import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // pastikan file ini ada
import Definition from "./pages/Definition";
import List from "./pages/List";
import Kromo from "./pages/Kromo";
import Ngoko from "./pages/Ngoko";
import Madya from "./pages/Madya";
import Penutup from "./pages/Penutup";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/definisi" element={<Definition />} />
          <Route path="/list" element={<List />} />
          <Route path="/kromo" element={<Kromo />} />
          <Route path="/ngoko" element={<Ngoko />} />
          <Route path="/madya" element={<Madya />} />
          <Route path="/penutup" element={<Penutup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
