import styles from './card_container.module.scss';
import Card, { PokemonData } from '../PokemonCard/PokemonCard';

interface CardContainerProps {
  pokemons: PokemonData[];
}

function PokemonCardContainer(props: CardContainerProps) {
  const {pokemons} = props;

  return (
    <div className={styles.cardsContainer}>
      <div className={styles.contentContainer}>
        {pokemons.map((pokemon) => <Card id={pokemon.id} name={pokemon.name}></Card>)}
      </div>
    </div>
  )
}

export default PokemonCardContainer