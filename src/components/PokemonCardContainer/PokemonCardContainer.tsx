import styles from './card_container.module.scss';
import Card, { PokemonData } from '../PokemonCard/PokemonCard';
import Loader from '../Loader/Loader';

interface CardContainerProps {
  pokemons: PokemonData[];
  isFetching : boolean;
}

function PokemonCardContainer(props: CardContainerProps) {
  const {pokemons} = props;
  const {isFetching} = props;

  return (
    <div className={styles.cardsContainer}>
      <div className={styles.contentContainer}>
        {pokemons.map((pokemon) => <Card key={pokemon.id} pokemon={pokemon}></Card>)}
        {isFetching && <Loader></Loader>}
      </div>
    </div>
  )
}

export default PokemonCardContainer