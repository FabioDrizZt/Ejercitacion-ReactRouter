import { Link } from 'react-router-dom';

const Card = ({ data }) => {
  return (
    <div className="card">
      <h3>{data.strDrink}</h3>
      <img src={data.strDrinkThumb} alt="cocktail" />
      <Link to={`/cocktail/${data.idDrink}`}>Ver detalles</Link>
    </div>
  );
};

export default Card;
