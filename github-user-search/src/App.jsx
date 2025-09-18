import { BrowserRouter as Router, Link } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <>
      <div>
        <h1>React Project for GitHub User Search Application</h1>
      </div>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </Router>
      
    </>
  );
}

export default App
