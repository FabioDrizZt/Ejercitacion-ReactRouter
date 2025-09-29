// TODO: Importar Link de react-router-dom

const Card = ({ data }) => {
  return (
    <div className="card">
      <h3>{data.strMeal}</h3>
      <img src={data.strMealThumb} alt="receta" />
      {/* TODO: Convertir esto en un Link */}
      <span style={{cursor: 'pointer', color: '#3b82f6'}}>Ver receta completa</span>
    </div>
  );
};

export default Card;
