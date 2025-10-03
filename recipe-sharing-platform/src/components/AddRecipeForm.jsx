import React, { useState } from "react";


export function validate({ title, ingredients, instructions }) {
  const errors = {};


  if (!title || !title.trim()) {
    errors.title = "Recipe title is required.";
  }

  const ingredientsList = (ingredients || "")
    .split("\n")
    .map((item) => item.trim())
    .filter((item) => item.length > 0);

  if (ingredientsList.length < 2) {
    errors.ingredients = "Please enter at least two ingredients.";
  }

  if (!instructions || !instructions.trim()) {
    errors.instructions = "Preparation steps are required.";
  }

  return errors;
}

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate({ title, ingredients, instructions });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert("Recipe submitted successfully ✅");
    setTitle("");
    setIngredients("");
    setInstructions("");
    setErrors({});
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-lg mt-10">
      <h1 className="text-3xl md:text-3xl font-bold mb-6 text-center text-gray-800">
        ➕ Add a New Recipe
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Recipe Title */}
        <div className="md:flex md:space-x-4">
          <label className="block text-gray-700 font-medium mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter recipe title"
          />
          {errors.title ? (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          ) : null}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Ingredients (one per line)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="5"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter ingredients, one per line"
          ></textarea>
          {errors.ingredients ? (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          ) : null}
        </div>

        {/* Instructions */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Preparation Steps
          </label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            rows="6"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter preparation steps"
          ></textarea>
          {errors.instructions ? (
            <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>
          ) : null}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full md:w-auto bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
