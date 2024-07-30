import styles from './card_container.module.scss';
import Card, { PokemonData } from '../PokemonCard/PokemonCard';
import Loader from '../Loader/Loader';


type ClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

interface CardContainerProps {
  pokemons: PokemonData[];
  isFetchingPokemon : boolean;
  isFetchPokemonError : boolean;
  handleNextPokemonPage: ClickHandler;
}

function PokemonCardContainer(props: CardContainerProps) {
  const {pokemons} = props;
  const {isFetchingPokemon} = props;
  const {isFetchPokemonError} = props;
  const {handleNextPokemonPage} = props;

  return (
    <div className={styles.cardsContainer}>
      <div className={styles.contentContainer}>
        {pokemons.map((pokemon) => <Card key={pokemon.id} pokemon={pokemon}></Card>)}
        {(!isFetchingPokemon && !isFetchPokemonError) && <div className={styles.loadMoreContainer}><button onClick={handleNextPokemonPage}>Load more</button></div>}
        {isFetchingPokemon && <Loader></Loader>}
        {isFetchPokemonError && <p>Something went wrong, please try again.</p>}
      </div>
    </div>
  )
}

export default PokemonCardContainer