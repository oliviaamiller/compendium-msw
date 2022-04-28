import styles from '../../App.css';

export default function AnimalCard({ img, name, latin, lifespan, habitat }) {
  return (
    <div>
      <img className={styles.img} src={img} alt="zoo animal" />
      <p>{name}</p>
      <p>{latin}</p>
      <p>{lifespan}</p>
      <p>{habitat}</p>
    </div>
  );
}
