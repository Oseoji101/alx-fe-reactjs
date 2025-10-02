import React, { useState, useEffect} from 'react';
import { Link } from "react-router-dom";

const Homepage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // Fetch recipes from an API or local data source
        fetch("/data.json")
            .then((response)=> response.json())
            .then((data) => setRecipes(data))
            .catch((error) => console.error("Error fetching recipes:", error));
    }, []);
    return (
        <div className='p-6 bg-gray-50 min-h-screen'>
            <h1 className="text-4xl font-bold mb-7 text-center text-gray-800">Recipe sharing platform</h1>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {recipes.map((recipe) =>(
                <div 
                key={recipe.id}
                className='bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer' 
                >
                <img src="{recipe.image}" alt="{recipe.title}"
                className='w-full h-48 object-cover' />
                    <div className='p-5 flex-1 flex flex-col justify-between'>
                        <h2 className='text-2xl font-semibold text-gray-800 mb-2'>{recipe.title}</h2>
                        <p className='text-gray-600'>{recipe.summary}</p>
                    </div>
                    <Link to={`/recipes/${recipe.id}`}
                className="mt-auto inline-block bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg text-center transition-colors hover:bg-blue-600">
                View Recipe
                </Link>

                </div>
                ))}
            </div>
        </div>
    );
};
export default Homepage;