import styles from './banner.module.css';

function Banner() {
    return (
        <div className={styles.banner}>
            <img src="img/banner.png" alt='배너' className={styles.bannerImg}/>
        </div>
    )
}

export default Banner;