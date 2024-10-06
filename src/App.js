import { useEffect, useState } from 'react';
import './App.css';
import video from './food.mp4';
import MyRecipesComponent from './MyRecipesComponent';
import Input from './Input';
import Footer from './Footer';

function App() {
  const MY_ID = "ccbc3f66";
  const MY_KEY = "7d46e16acf4154779eed978fef9dd881";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("avocado");

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipes(data.hits);
    }
    getRecipe()
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
    setMySearch("")
  }

  return (
    <div>
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>

      <div className='container'>
        <h1>Find a recipe</h1>
      </div>

      <div className='container'>
        <Input mySearch={mySearch}
          finalSearch={finalSearch}
          myRecipeSearch={myRecipeSearch}
        />
      </div>

      {myRecipes.map((element, index) => (
        <MyRecipesComponent key={index}
          label={element.recipe.label}
          calories={element.recipe.calories}
          image={element.recipe.images.SMALL.url}
          ingredients={element.recipe.ingredientLines}
          instructions={element.recipe.url}
          source={element.recipe.source}
          carbs={element.recipe.totalNutrients.CHOCDF.quantity}
          fat={element.recipe.totalNutrients.FAT.quantity}
          protein={element.recipe.totalNutrients.PROCNT.quantity}
          servings={element.recipe.yield}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
