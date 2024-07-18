import styles from './card.module.scss';

export interface CardProps {
  id: number;
  content: string;
}

function Card(props: CardProps) {
  const {id, content} = props;
  return (
    <div>
      <p>ID: {id}</p>
      <p>CONTENT: {content}</p>
    </div>
  )
}

export default Card