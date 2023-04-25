import styles from './banner.module.css';

function Banner() {
    return (
        <div className={styles.banner}>
            <img src="img/banner_back.gif" alt='배너_배경' className={`${styles.imgCommon} ${styles.imgBack}`}/>
            <img src="img/banner_font.png" alt='배너_폰트' className={`${styles.imgCommon} ${styles.imgFont}`}/>
        </div>
    )
}

export default Banner;