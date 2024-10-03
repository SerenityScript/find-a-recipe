function MyRecipesComponent({label, calories, image, ingredients}) {
  return (
    <div>
      <div className="container">
        <h2>{label}</h2>
      </div>
      
      <div className="container">
        <img src={image} alt="dish" />
      </div>

      <ul className="container list">
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png" className="icon" alt="check" />
            {ingredient}</li>
        ))}
      </ul>

      <div className="container">
        <p>{calories.toFixed()} calories</p>
      </div>
    </div>
  )
}

export default MyRecipesComponent;