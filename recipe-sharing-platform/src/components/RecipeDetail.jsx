import React, { useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';

const RecipeDetail = () => {
    const [recipes, setRecipes] = useState(null);

    useEffect(() => {
        // Fetch recipe details from an API or local data source
        fetch("/data.json")
        .then((res) => res.json())
        .then((data) => {
           const  foundRecipe = data.find((r) => r.id === parseIntid);
        setRecipes(foundRecipe)
        })
    .catch((error) => console.error("Error fetching recipe details:", error));
    }, [id]);

if (!recipe) return <div>Loading...</div>

return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Link
        to="/"
        className="inline-block mb-6 text-blue-500 hover:underline"
      >
        ← Back to Home
      </Link>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            {recipe.title}
          </h1>
          <p className="text-gray-600 mb-6">{recipe.summary}</p>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
            <ul className="list-disc list-inside space-y-1">
              {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
            <ol className="list-decimal list-inside space-y-2">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;