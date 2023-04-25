import styles from './footer.module.css';

function Footer() {
    return (
        <footer className={styles.foo}>
            <div className={styles.imgs}>
                <a href="https://github.com" target='_blank' rel='noreferrer'>
                    <img src="img/github.png" alt="github" className={styles.fooIcon}/>
                </a>
                <a href='https://www.instagram.com' target='_blank' rel='noreferrer'>
                    <img src="img/instagram.png" alt="instagram" className={styles.fooIcon}/>
                </a>
                <a href='https://discord.com' target='_blank' rel='noreferrer'>
                    <img src="img/discord.png" alt="discord" className={styles.fooIcon}/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;