 import axios from 'axios';

 async function fetchUserData(username, location, minRepos) {

    try {
        let query = "";
        if (username) {
            query += `${username} in:login`;
        }

        if (location) {
            query += `Location: ${location}` ;
        }
        if (minRepos) {
            query += `repos:>=${minRepos}`;
        }
        query = query.trim();

        const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
        
        return response.data.items;

     } catch (error) {
        console.error("Looks like we cant find the user:", error);
        throw error;
    }   
}
export { fetchUserData };