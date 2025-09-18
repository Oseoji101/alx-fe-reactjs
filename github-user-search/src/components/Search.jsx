import { useState } from "react";
import { fetchUserData } from "../services/githubService";

// This is a search component.


function Search () {
    const[username, setUsername] = useState("");
    const[location, setLocation] = useState("");
    const[minirepos, setMinirepos] = useState("");
    
    const [input, setInput] = useState("");
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    

    const handleInputChange = (e) => {
        setInput(e.target.value);               
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const query = input.trim();
        if (!query) return;

        setLoading(true);
        setError(false);
        setUserData(null);
        
    try {
      const data = await fetchUserData(query);
      setUserData(data); 
    } catch (err) {
      setError(true); 
    } finally {
      setLoading(false);
    }
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-xl mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">GitHub User Search</h2>
       
       
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    // usermane
                    <label htmlFor="username" className="block text-sm font-medium mb-1"></label>
                    <input  
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Search GitHub username..."         
                    />

                </div>
                {/* location */}
                <div>
                    <label htmlFor="location"></label>
                    <input 
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Nigeria"
                                  
                    />
                </div>
                {/* minirepos */}
                <div>
                    <label htmlFor="mminirepos"></label>
                    <input 
                    type="number"
                    id="minirepos"
                    value={minirepos}
                    onChange={(e) => setMinirepos(e.target.value)}
                    placeholder="10"     
                    />
                </div>
                    {/* submit */}
                 <button className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
                 type="submit">Search</button>

            </form>
            {/* conditional */}
            {loading && <p>Loading...</p>}
            {error && <p>Looks like we can't find the user.</p>}
            {userData && (
            <div>
              <img src={userData.avatar_url} alt={userData.login} width="50" />
              <p>{userData.name || userData.login}</p>
              <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
          )}
        </div>
        </div>
    ); 
}
export default Search;