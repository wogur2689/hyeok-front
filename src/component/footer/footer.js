import styles from './footer.module.css';

export function Links(props) {
    return (
        <a href={props.url} target='_blank' rel='noreferrer' className={styles.iconLink}>
            <img src={props.img} alt={props.alt} className={styles.fooIcon}/>
        </a>
    );
}

function Footer() {
    return (
        <footer className={styles.foo}>
                <Links url={"https://github.com"} img={"img/github.png"} alt={"github"} />
                <Links url={"https://www.instagram.com"} img={"img/instagram.png"} alt={"instagram"}/>
                <Links url={"https://discord.com"} img={"img/discord.png"} alt={"discord"}/>
        </footer>
    );
}

export default Footer;