function MyRecipesComponent({label, calories, image, ingredients, source, instructions, carbs, fat, protein, servings}) {
  return (
    <div className="Recipe">
      <div className="list">
        <h2>{label}</h2>
      </div>
      <div className="container">
        <div className="list">
          <img className="recipeImg" src={image} alt="dish" />
          <h3>{servings} Servings</h3>
          <p>{calories.toFixed()} calories</p>
          <div className="container">
            <div className="list"> 
              <p className="nutrient">Carbs</p>
              <p className="nutrient">{carbs.toFixed()}g</p>
            </div>
            <div className="list">
              <p className="nutrient">Fat</p>
              <p className="nutrient">{fat.toFixed()}g</p>
            </div>
            <div className="list">
              <p className="nutrient">Protein</p>
              <p className="nutrient">{protein.toFixed()}g</p>
            </div>
          </div>
        </div>

        <div className="list">
          <h3 className="underlined">{ingredients.length} Ingredients:</h3>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3>Instructions:
            <button className="cta">
              <span><a href={instructions} rel="noreferrer" target="_blank">{source}</a></span>
              <svg width="15px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </h3>
        </div>
      </div>
    </div>
  )
}

export default MyRecipesComponent;