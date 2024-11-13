import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Cocktail = () => {
  const [cocktail, setCocktail] = useState(null);

/*   const getCocktail = async () => {
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await res.json();
    setCocktail(data.drinks[0]);
  };

  useEffect(() => {
    getCocktail();
  }, [id]); */

  return (
    <div>
      {cocktail ? (
        <>
          <h2>{cocktail.strDrink}</h2>
          <div className="card">
            <img src={cocktail.strDrinkThumb} alt="cocktail-detail" />
            <p>{cocktail.strInstructions}</p>
            <p>Ingredientes:</p>
            <ul>
              {[...Array(15)].map((_, index) => {
                if (cocktail[`strIngredient${index + 1}`]) {
                  return <li key={index}>{cocktail[`strIngredient${index + 1}`]}</li>;
                }
                return null;
              })}
            </ul>
          </div>
          <button>Volver atrás</button>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Cocktail;
