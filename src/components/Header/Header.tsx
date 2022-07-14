import styles from './Header.module.css';

import logoCodelandia from '../../assets/logo.svg';

const githubUrl = 'https://github.com/LeticiaBarbosa-dev';
const linkedinUrl = 'https://www.linkedin.com/in/leticia-pbs/';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logoCodelandia} alt="Logotipo do condelândia" />
            <div>
                <a target='_blank' className={styles.buttonGithub} href={githubUrl}>Meu Github</a>
                <a target='_blank' className={styles.buttonLinkedin} href={linkedinUrl}>Meu Linkedin</a>
            </div>
        </header>
    );
}