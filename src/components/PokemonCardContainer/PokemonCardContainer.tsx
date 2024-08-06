import styles from './card_container.module.scss';
import Card, { PokemonData } from '../PokemonCard/PokemonCard';
import Loader from '../Loader/Loader';


type ClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

interface CardContainerProps {
  pokemons: PokemonData[];
  isFetchingPokemon : boolean;
  isFetchPokemonError : boolean;
  handleNextPokemonPage: ClickHandler;
  isPokemonLimitReached: boolean;
}

function PokemonCardContainer(props: CardContainerProps) {
  const {pokemons, isFetchingPokemon, isFetchPokemonError, handleNextPokemonPage, isPokemonLimitReached } = props;

  return (
    <div className={styles.cardsContainer}>
      <h1>All Pokemons</h1>
      <div className={styles.contentContainer}>
        {pokemons.map((pokemon) => <Card key={pokemon.id} pokemon={pokemon}></Card>)}
        {(!isFetchingPokemon && !isPokemonLimitReached) && <div className={styles.loadMoreContainer}><button onClick={handleNextPokemonPage}>Load more</button></div>}
        {isFetchingPokemon && <Loader></Loader>}
        {isFetchPokemonError && <p>Something went wrong, please try again.</p>}
      </div>
    </div>
  )
}

export default PokemonCardContainer