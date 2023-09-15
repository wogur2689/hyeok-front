import styles from './header.module.css';
import logo from '../../images/logo.png';
import { 
    Link, 
} from 'react-router-dom';

function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} className={styles.logo} alt='로고'></img>
            <nav className={styles.nav}>
                <a href='/'>Home</a>
                <a href='/'>profile</a>
                <a href='/'>tree</a>
                {/*
                <Link to="/">Home</Link>
                <Link to="/">profile</Link>
                <Link to="/">tree</Link> */}
            </nav>
        </header>
    );
}

export default Header;