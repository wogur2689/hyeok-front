import styles from './main.module.css';
import Banner from './banner/banner';
import Content from './content/content';
import Tree from './tree/tree';

function Main() {
    return (
        <div className={styles.section}>
            <div className={styles.main}>
                <Banner/>
                <Content/>
                <Tree/>
            </div>
        </div>
    )
}

export default Main;