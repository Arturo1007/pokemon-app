import { PokemonData } from "../PokemonCard/PokemonCard"
import styles from "./pokemoncard_detail.module.scss";

export interface PokemonSpecie {
  flavor_text_entries: {
    flavor_text: string;
  }[];
}

interface PokemonDetailCardProps {
  pokemon: PokemonData;
  pokemonSpecie : PokemonSpecie;
}

function PokemonDetailCard(props: PokemonDetailCardProps) {
  const { pokemon, pokemonSpecie } = props;
  console.log(pokemonSpecie);
  let sprite = pokemon.sprites.other['official-artwork']['front_default'];
  let description = pokemonSpecie.flavor_text_entries[0].flavor_text;

  return (
    <div className={styles.DetailCardContainer}>
      <div className={styles.firstRow}>
        <div className={styles.imageContainer}> <img src={sprite} alt="" /></div>
        <div className={styles.descriptionContainer}>
          <h1>{pokemon.name}</h1>
          <p>{description.replace('\f', '').replace('\n', ' ')}</p>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetailCard