import styles from "./card.module.scss";

export interface PokemonData {
  id: number;
  name: string;
  [key: string]: any;
}

function Card(props: PokemonData) {
  const { id, name } = props;
  return (
    <div className={styles.pokemonCardContainer}>
      <div className={styles.imageContainer}></div>
      <div className={styles.contentContainer}>
        <p>Id: {id}</p>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default Card;
