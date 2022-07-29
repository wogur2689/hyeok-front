import { Link, Route, Routes } from 'react-router-dom';
import styles from './header.module.css';
import Main from '../main/main';
import Login from '../main/content/member/login';

function Header() {
    return (
        <header className={styles.header}>
            로고 및 헤더
            <nav className={styles.nav}>
                <Link to="/"></Link>
                <Link to="/login"></Link>
                <Routes>
                    <Route path="/" exact={true} elemant={<Main/>}/>
                    <Route path="/login" elemant={<Login/>}/>
                </Routes>
                {/*<div className={styles.div}><a href="#" className={styles.a}>Home</a></div>
                <div className={styles.div}><a href="#" className={styles.a}>Sign In</a></div>
                <div className={styles.div}><a href="#" className={styles.a}>Board</a></div>
                <div className={styles.div}><a href="#" className={styles.a}>Map</a></div>
                */}
            </nav>
        </header>
    );
}

export default Header;