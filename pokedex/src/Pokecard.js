import "./Pokecard.css";

const POKE_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const Pokecard = ({ id, name, type, exp }) => {
  let image = `${POKE_API}${id}.png`;
  return (
    <div className="Pokecard">
      <b>{name}</b>
      <img src={image} alt={name} className="Pokecard-img" />
      <small>Type: {type}</small>
      <small>EXP: {exp}</small>
    </div>
  );
};

export default Pokecard;
