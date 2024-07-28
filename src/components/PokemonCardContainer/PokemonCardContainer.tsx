import styles from './card_container.module.scss';
import Card, { PokemonData } from '../PokemonCard/PokemonCard';
import Loader from '../Loader/Loader';

interface CardContainerProps {
  pokemons: PokemonData[];
  isFetchingPokemon : boolean;
  isFetchPokemonError : boolean;
}

function PokemonCardContainer(props: CardContainerProps) {
  const {pokemons} = props;
  const {isFetchingPokemon} = props;
  const {isFetchPokemonError} = props;

  return (
    <div className={styles.cardsContainer}>
      <div className={styles.contentContainer}>
        {pokemons.map((pokemon) => <Card key={pokemon.id} pokemon={pokemon}></Card>)}
        {isFetchingPokemon && <Loader></Loader>}
        {isFetchPokemonError && <p>Something went wrong, please try again.</p>}
      </div>
    </div>
  )
}

export default PokemonCardContainer