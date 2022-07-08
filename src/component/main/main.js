import styles from './main.module.css';
import Banner from './banner/banner';
import Content from './content/content';

function Main() {
    return (
        <div className={styles.main}>
            <Banner/>
            <Content/>
        </div>
    )
}

export default Main;