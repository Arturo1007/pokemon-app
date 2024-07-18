import styles from './card_container.module.scss';
import Card, { CardProps } from '../Card/Card';

interface CardContainerProps {
  cards: CardProps[];
}

function CardContainer(props: CardContainerProps) {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.contentContainer}>
        <Card id={1} content='Card 1'></Card>
        <Card id={2} content='Card 2'></Card>
        <Card id={3} content='Card 3'></Card>
        <Card id={4} content='Card 4'></Card>
      </div>
    </div>
  )
}

export default CardContainer