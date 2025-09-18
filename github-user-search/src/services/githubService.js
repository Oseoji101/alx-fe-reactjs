async function fetchUserData(username) {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`)
        return response.data;

    } catch error {
        console.error("Looks like we cant find the user:", error);
        throw error;
    }   
}
export { fetchUserData };