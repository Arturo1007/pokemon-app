import { PokemonTypeNames } from "../PokemonCard/PokemonCard"
import styles from './types_card.module.scss';

interface TypesCardProps {
  type: PokemonTypeNames
}

function TypesCard(props: TypesCardProps) {
  let card;
  switch (props.type) {
    case 'normal':
      card = <div className={`${styles.card} ${styles.normal}`}>{props.type}</div>;
      break;
  
    case 'fire':
      card = <div className={`${styles.card} ${styles.fire}`}>{props.type}</div>;
      console.log('fire');
      break;
  
    case 'water':
      card = <div className={`${styles.card} ${styles.water}`}>{props.type}</div>;
      break;
  
    case 'electric':
      card = <div className={`${styles.card} ${styles.electric}`}>{props.type}</div>;
      break;
  
    case 'grass':
      card = <div className={`${styles.card} ${styles.grass}`}>{props.type}</div>;
      break;
  
    case 'ice':
      card = <div className={`${styles.card} ${styles.ice}`}>{props.type}</div>;
      break;
  
    case 'fighting':
      card = <div className={`${styles.card} ${styles.fighting}`}>{props.type}</div>;
      break;
  
    case 'poison':
      card = <div className={`${styles.card} ${styles.poison}`}>{props.type}</div>;
      break;
  
    case 'ground':
      card = <div className={`${styles.card} ${styles.ground}`}>{props.type}</div>;
      break;
  
    case 'flying':
      card = <div className={`${styles.card} ${styles.flying}`}>{props.type}</div>;
      break;
  
    case 'psychic':
      card = <div className={`${styles.card} ${styles.psychic}`}>{props.type}</div>;
      break;
  
    case 'bug':
      card = <div className={`${styles.card} ${styles.bug}`}>{props.type}</div>;
      break;
  
    case 'rock':
      card = <div className={`${styles.card} ${styles.rock}`}>{props.type}</div>;
      break;
  
    case 'ghost':
      card = <div className={`${styles.card} ${styles.ghost}`}>{props.type}</div>;
      break;
  
    case 'dragon':
      card = <div className={`${styles.card} ${styles.dragon}`}>{props.type}</div>;
      break;
  
    case 'dark':
      card = <div className={`${styles.card} ${styles.dark}`}>{props.type}</div>;
      break;
  
    case 'steel':
      card = <div className={`${styles.card} ${styles.steel}`}>{props.type}</div>;
      break;
  
    case 'fairy':
      card = <div className={`${styles.card} ${styles.fairy}`}>{props.type}</div>;
      break;
  
    default:
      card = <div className={`${styles.card}`}>{props.type}</div>;
      break;
  }
  return card;  
}

export default TypesCard