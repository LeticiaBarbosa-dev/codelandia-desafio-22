import styles from './Footer.module.css';
import simboloCodelandia from "../assets/simbolo.svg";

export function Footer() {
  return (
    <div className={styles.footer}>
      <img src={simboloCodelandia} alt="" />
      <div className={styles.direitos}>
          <span className={styles.author}>© 2022 - Letícia Barbosa</span>
          <span>Codelândia</span>
      </div>
    </div>
  );
}
