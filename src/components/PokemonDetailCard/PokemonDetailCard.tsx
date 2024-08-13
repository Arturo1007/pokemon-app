import PieChart from "../Charts/BarsChart/BarsChart";
import { PokemonData } from "../PokemonCard/PokemonCard"
import styles from "./pokemoncard_detail.module.scss";
import { getPokemonTypes } from "../PokemonCard/PokemonCard";
import { PokemonTypeNames } from "../PokemonCard/PokemonCard";
import TypesCard from "../TypesCard/TypesCard";

export interface PokemonSpecie {
  flavor_text_entries: {
    flavor_text: string;
  }[];
  habitat: {
    name: string;
  }
  shape: {
    name: string;
  }
  generation: {
    name: string;
  }
}

interface PokemonDetailCardProps {
  pokemon: PokemonData;
  pokemonSpecie : PokemonSpecie;
}

function PokemonDetailCard(props: PokemonDetailCardProps) {
  const { pokemon, pokemonSpecie } = props;
  const sprite = pokemon.sprites.other['official-artwork']['front_default'];
  const description = pokemonSpecie.flavor_text_entries[0].flavor_text;
  const types = getPokemonTypes(pokemon);
  const stats = {
    hp: pokemon.stats[0].base_stat,
    attack: pokemon.stats[1].base_stat,
    defence: pokemon.stats[2].base_stat,
    specialAttack: pokemon.stats[3].base_stat,
    specialDefense: pokemon.stats[4].base_stat,
    speed: pokemon.stats[5].base_stat,
  }

  function renderPokemonTypeCards(types: PokemonTypeNames[]) {
    return types.map((type) => <TypesCard type={type} key={'Type-'+type}/>)
  }

  return (
    <div className={styles.DetailCardContainer}>
      <div className={styles.firstRow}>
        <div className={styles.imageContainer}> <img src={sprite} alt={pokemon.name + ' image'} /></div>
        <div className={styles.descriptionContainer}>
          <h1>{pokemon.name}</h1>
          <p>{description.replace('\f', ' ').replace('\n', ' ')}</p>
          <PieChart stats={stats}/>
        </div>
      </div>
      <div className={styles.secondRow}>
        <div className={styles.types}>
          <div className={styles.typesCardContainer}>
            {renderPokemonTypeCards(types)}
          </div>
        </div>
      </div>
      <div className={styles.thirdRow}>
        <div className={styles.characteristics}>
          <h2>Height</h2>
          <p>{(pokemon.height * 10).toFixed(2)} Cm</p>
        </div>
        <div className={styles.characteristics}>
          <h2>Weight</h2>
          <p>{(pokemon.weight * 0.1).toFixed(2)} Kg</p>
        </div>
        <div className={styles.characteristics}>
          <h2>Shape</h2>
          <p>{pokemonSpecie.shape.name}</p>
        </div>
        <div className={styles.characteristics}>
          <h2>Habitat</h2>
          <p>{pokemonSpecie.habitat.name}</p>
        </div>
        <div className={styles.characteristics}>
          <h2>Generation</h2>
          <p>{pokemonSpecie.generation.name}</p>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetailCard