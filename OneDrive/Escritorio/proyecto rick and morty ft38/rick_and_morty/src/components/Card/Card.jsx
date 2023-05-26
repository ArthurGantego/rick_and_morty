
import styles from "./Card.module.css";

export default function Card({ name, status, species, gender, origin, image, onClose }) {
   const imageUrl = typeof image === 'string' ? image : image.url;
   return (
     <div className={styles.container}>
      <div className={styles.buttonContainer}>
      <button onClick={onClose}>X</button>
      </div>
      <div className={styles.dataContainer}>
        <h2>Name: {name}</h2>
        <h3>Status: {status}</h3>
        <h4>Species: {species}</h4>
        <h4>Gender: {gender}</h4>
        <h4>Origin: {origin.name}</h4>
      </div>
      <img className={styles.image}   src={imageUrl} alt={name} />
     </div>
   );
 }