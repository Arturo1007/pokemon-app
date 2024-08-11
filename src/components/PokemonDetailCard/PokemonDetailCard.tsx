import PieChart from "../Charts/BarsChart/BarsChart";
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
  const sprite = pokemon.sprites.other['official-artwork']['front_default'];
  const description = pokemonSpecie.flavor_text_entries[0].flavor_text;
  const stats = {
    hp: pokemon.stats[0].base_stat,
    attack: pokemon.stats[1].base_stat,
    defence: pokemon.stats[2].base_stat,
    specialAttack: pokemon.stats[3].base_stat,
    specialDefense: pokemon.stats[4].base_stat,
    speed: pokemon.stats[5].base_stat,
  }
  return (
    <div className={styles.DetailCardContainer}>
      <div className={styles.firstRow}>
        <div className={styles.imageContainer}> <img src={sprite} alt="" /></div>
        <div className={styles.descriptionContainer}>
          <h1>{pokemon.name}</h1>
          <p>{description.replace('\f', ' ').replace('\n', ' ')}</p>
          <PieChart stats={stats}/>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetailCard