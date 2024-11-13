import React, { useEffect, useState } from 'react';
import Card from './components/Card';

const Home = () => {
  const [cocktails, setCocktails] = useState([]);

  const getCocktails = async () => {
    const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic');
    const data = await res.json();
    setCocktails(data.drinks);
  };

  useEffect(() => {
    getCocktails();
  }, []);

  return (
    <div className="grid">
      {cocktails.length
        ? cocktails.map((cocktail) => <Card key={cocktail.idDrink} data={cocktail} />)
        : null}
    </div>
  );
};

export default Home;
