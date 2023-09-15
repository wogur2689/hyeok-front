import styles from './footer.module.css';
import github from '../../images/github.png';
import instagram from '../../images/instagram.png';
import discord from '../../images/discord.png';

function Links(props) {
    return (
        <a href={props.url} target='_blank' rel='noreferrer' className={styles.iconLink}>
            <img src={props.img} alt={props.alt} className={styles.fooIcon}/>
        </a>
    );
}

function Footer() {
    return (
        <footer className={styles.foo}>
            <Links url={"https://github.com"} img={github} alt={"github"} />
            <Links url={"https://www.instagram.com"} img={instagram} alt={"instagram"}/>
            <Links url={"https://discord.com"} img={discord} alt={"discord"}/>
        </footer>
    );
}

export default Footer;