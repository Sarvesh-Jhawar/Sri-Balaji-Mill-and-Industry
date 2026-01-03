import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';

import Home from './pages/Home';
import About from './pages/About';
import Divisions from './pages/Divisions';
// Placeholder pages (We will implement them later)
import Process from './pages/Process';
import Quality from './pages/Quality';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="about-us" element={<About />} />
          <Route path="divisions" element={<Divisions />} />
          <Route path="process" element={<Process />} />
          <Route path="quality" element={<Quality />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
