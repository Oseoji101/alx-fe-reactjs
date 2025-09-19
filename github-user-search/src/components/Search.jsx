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
        setUserData([]);
        
    try {
      const data = await fetchUserData(query);
      setUserData(data); 
    } catch (err) {
      setError(true); 
    } finally {
      setLoading(false);
    }
    };

    const handleLoadMore = async () => {
    setLoading(true);
    try {
      const nextPage = page + 1;
      const data = await fetchUserData(username, location, minirepos, nextPage);
      setUserData((prev) => [...prev, ...data]); // append new results
      setPage(nextPage);
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
                    <label htmlFor="minirepos"></label>
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
            {/* Results */}
      <div className="mt-6">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Looks like we can't fetch users.</p>}

        {userData.length > 0 && (
          <ul className="space-y-4">
            {userData.map((user) => (
              <li
                key={userData.id}
                className="flex items-center space-x-4 p-4 border rounded-lg"
              >
                <img
                  src={userData.avatar_url}
                  alt={userData.login}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-bold">{userData.login}</p>
                  <a
                    href={userData.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    View Profile
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Load More Button */}
        {userData.length > 0 && (
          <button
            onClick={handleLoadMore}
            className="mt-4 w-full bg-gray-200 py-2 rounded-lg hover:bg-gray-300"
          >
            Load More
          </button>
        )}
      </div>
    </div>
    ); 
}
export default Search;