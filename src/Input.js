import './Input.css';

function Input({mySearch, finalSearch, myRecipeSearch}) {
  return (
    /* From Uiverse.io by satyamchaudharydev */ 
    <form className="form" onSubmit={finalSearch}>
      <label htmlFor="search">
        <input onChange={myRecipeSearch} value={mySearch} required="" autoComplete="off" placeholder="Enter an ingredient..." id="search" type="text" />
        <button onClick={finalSearch} type="reset" className="search-btn">
        <svg strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinejoin="round" strokeLinecap="round"></path>
        </svg>
        </button>
      </label>
    </form>
  )
}

export default Input;