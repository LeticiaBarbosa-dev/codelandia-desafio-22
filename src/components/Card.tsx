import styles from "./Card.module.css";
import image from "../assets/image.png";

export function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={image} alt="Imagem" />
      </div>
      <span>Nome do projeto</span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec<br/> felis
        ligula, accumsan nec cursus in, eleifend sit amet dui.
      </p>
      <a className={styles.buttonDemo} href="#">demo</a>
      <a className={styles.buttonGithub} href="#">github</a>
    </div>
  );
}
