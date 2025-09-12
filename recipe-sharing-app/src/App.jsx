import './App.css'
import RecipeList from './components/RecipeList.jsx'
import AddRecipeForm from './components/AddRecipeForm.jsx'
import SearchBar from './components/SearchBar.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
      <SearchBar />
    </div>
  )
}

export default App
