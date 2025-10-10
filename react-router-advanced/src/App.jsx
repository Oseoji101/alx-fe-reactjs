import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
const isLoggedIn = false;

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
    path="/profile/*"
    element={
      <ProtectedRoute isAuthenticated={isLoggedIn}>
        <Profile />
      </ProtectedRoute>
    }
  /> 
        <Route path="*" element={<NotFound />} />
        <Route path="/blog" element={<Blog />} />
<Route path="/blog/:id" element={<BlogPost />} />

      </Routes>
    </Router>
  );
}

export default App;
