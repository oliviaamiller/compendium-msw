import styles from '../../App.css';

export default function AnimalCard({ img, name, latin, lifespan, habitat }) {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={img} alt="zoo animal" />
      <div className={styles.animalText}>
        <h4>{name}</h4>
        <p className={styles.latin}>{latin}</p>
        <p>{`Lifespan: ${lifespan} years`}</p>
        <p>{`Habitat: ${habitat}`}</p>
      </div>
    </div>
  );
}
