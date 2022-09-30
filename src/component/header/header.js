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
                <Link to="/login">Login</Link>
            </nav>
        </header>
    );
}

export default Header;