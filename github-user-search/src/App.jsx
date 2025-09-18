import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom'
import './App.css'
import Search from './components/Search';

function App() {
  

  return (
    <>
      <Search />
      <div>
        <h1>React Project for GitHub User Search Application</h1>
      </div>
      <Router>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/about" element={<h2>About Page</h2>} />
        <Route path="/contact" element={<h2>Contact Page</h2>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
