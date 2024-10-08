import styles from "./card.module.scss";
import pokeballIcon from "./../../assets/icons/pokeball_icon.png";
import iconMapping from "../../utility/pokemonIconMapping";
import { Link } from "react-router-dom";
import { useState } from "react";
import placeholderImage from "../../assets/images/placeholderimage.png";

export type PokemonTypeNames =
  | "normal"
  | "fighting"
  | "flying"
  | "poison"
  | "ground"
  | "rock"
  | "bug"
  | "ghost"
  | "steel"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "psychic"
  | "ice"
  | "dragon"
  | "dark"
  | "fairy";

/* TBD: This interface is still missing properties from the API, it currently has the
  Most used ones.
*/
export interface PokemonData {
  id: string;
  name: string;
  height: number;
  weight: number;
  sprites: {
    other: {
      home: {
        front_default: string;
      };
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: [
    {
      type: {
        name: PokemonTypeNames;
      };
    }
  ];
  stats: {
    base_stat : string
  }[],
}

/**
 * Renders the icons for given Pokemon types.
 * @param {PokemonTypeNames[]} types - Array of Pokemon types.
 * @returns {JSX.Element[]} pokemon elements images.
 */
function renderPokemonElementIcons(types: PokemonTypeNames[]): JSX.Element[] {
  return types.map((type, index) => (
    <img key={index} src={iconMapping[type]} alt={`${type} icon`} />
  ));
}

/**
 * Extracts the types from a Pokemon object.
 * @param {PokemonData} pokemon - The Pokemon data.
 * @returns {PokemonTypeNames[]} Array of pokemon type names.
 */
export function getPokemonTypes(pokemon: PokemonData): PokemonTypeNames[] {
  return pokemon.types.map((type) => type.type.name);
}

function Card(props: { pokemon: PokemonData }) {
  const [isimageLoaded, setImageLoaded] = useState(false);
  const { pokemon } = props;
  let sprite = pokemon.sprites.other["official-artwork"]["front_default"];

  function handleLoad() {
    setImageLoaded(true);
  }

  return (
    <Link to={`/${pokemon.name}`} className={styles.pokemonCardContainer}>
      <div className={styles.imageContainer}>
        <img
          src={isimageLoaded ? sprite : placeholderImage}
          alt={"Sprite of " + pokemon.name}
          loading="lazy"
          onLoad={handleLoad}
        />
      </div>
      <div className={styles.contentContainer}>
        <p className={styles.pokemonName}>{pokemon.name}</p>
        <p className={styles.pokemonID}>
          <img src={pokeballIcon} alt="pokeball icon" /> # {pokemon.id.length}
          {pokemon.id}
        </p>
      </div>
      <div>
        <div className={styles.elementIconContainer}>
          {renderPokemonElementIcons(getPokemonTypes(pokemon))}
        </div>
      </div>
    </Link>
  );
}

export default Card;
