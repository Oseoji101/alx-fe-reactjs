import { useState } from "react";
import { fetchUserData } from "./services/githubService";

// This is a search component.


function Search () {
    const [input, setInput] = useState("");
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    

    const handleInputChange = (e) => {
        setInput(e.target.value);               
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        query = input.trim();
        if (!query) return;

        setLoading(true);
        setError(false);
        setUserData(null);
        
    try {
      const data = await fetchUserData(query);
      setUser(data); 
    } catch (err) {
      setError(true); 
    } finally {
      setLoading(false);
    }
    };

    return (
        <form onSubmit={handlesubmit}>
            <label htmlFor="search"></label>
            <input  
            type="text"
            id="search"
            value={input}
            onChange={handleInputChange}
            placeholder="Search GitHub username..."         
            />
            <button type="submit">Search</button>

            <p>user's avater </p>
        </form>

    {/* Conditional rendering */}
      {loading && <p>Loading...</p>}
      {error && <p>"Looks like we cant find the user".</p>}
      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} width="50" />
          <p>{user.name || user.login}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
    ); 
}
export default Search;