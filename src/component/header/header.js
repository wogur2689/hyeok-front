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
                <Link to="/">Home</Link>
                <Link to="/login">Sign in</Link>
                <Link to="/login">Board</Link>
                <Link to="/login">Map</Link>
            </nav>
        </header>
    );
}

export default Header;