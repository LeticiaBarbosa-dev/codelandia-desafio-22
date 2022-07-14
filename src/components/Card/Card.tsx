import styles from "./Card.module.css";
import image from "../../assets/image.png";

interface CardProps {
  imageUrl: string;
  repositoryUrl: string;
  projectName: string;
  demoUrl: string;
  description: string;
}

export function Card({ imageUrl, repositoryUrl, projectName, demoUrl,description}: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={image} alt="Imagem" />
      </div>
      <span>{projectName}</span>
      <p>
        {description}
      </p>
      <a target="_blank" className={styles.buttonDemo} href={demoUrl}>demo</a>
      <a target="_blank" className={styles.buttonGithub} href={repositoryUrl}>github</a>
    </div>
  );
}
