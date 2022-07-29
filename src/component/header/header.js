import { Routes } from 'react-router-dom';
import styles from './header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            로고 및 헤더
            <nav className={styles.nav}>
                {/*<Routes>
                    <Route path="/" exact={true} elemant={<Home/>}/>
                    <Route path="/login" elemant={<Login/>}/>
                    <Route path="/board" elemant={<Board/>}/>
                    <Route path="/map" elemant={<Map/>}/>
                </Routes>*/}
                <div className={styles.div}><a href="#" className={styles.a}>Home</a></div>
                <div className={styles.div}><a href="#" className={styles.a}>Sign In</a></div>
                <div className={styles.div}><a href="#" className={styles.a}>Board</a></div>
                <div className={styles.div}><a href="#" className={styles.a}>Map</a></div>
                
            </nav>
        </header>
    );
}

export default Header;