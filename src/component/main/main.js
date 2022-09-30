import styles from './main.module.css';
import Banner from './banner/banner';
import Content from './content/content';

function Main() {
    return (
        <div className={styles.section}>
            <div className={styles.main}>
                <Banner/>
                <Content/>
            </div>
        </div>
    )
}

export default Main;