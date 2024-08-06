import { PokemonData } from "../PokemonCard/PokemonCard"
import styles from "./pokemoncard_detail.module.scss";

interface PokemonDetailCardProps {
  pokemon: PokemonData;
}

function PokemonDetailCard(props: PokemonDetailCardProps) {
  const { pokemon } = props;

  return (
    <div className={styles.DetailCardContainer}>{pokemon.name}</div>
  )
}

export default PokemonDetailCard