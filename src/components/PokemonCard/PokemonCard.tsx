import styles from "./card.module.scss";

export interface PokemonData {
  pokemon: {
    id: string;
    name: string;
    sprites: {
      other: {
        home: {
          front_default: string;
        }
      }
    }
    [key: string]: any;
  }
}

function Card(props: PokemonData) {
  const {pokemon} = props;
  let sprite = pokemon.sprites.other.home.front_default;
  let name = pokemon.name; 

  return (
    <div className={styles.pokemonCardContainer}>
      <div className={styles.imageContainer}>
        <img src={sprite} alt={'Sprite of ' + name} loading="lazy" />
      </div>
      <div className={styles.contentContainer}>
        <p>{pokemon.name}</p>
      </div>
    </div>
  );
}

export default Card;
