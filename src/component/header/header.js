import styles from './header.module.css';
import { 
    Link, 
} from 'react-router-dom';

function Header() {
    return (
        <header className={styles.header}>
            로고 및 헤더
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