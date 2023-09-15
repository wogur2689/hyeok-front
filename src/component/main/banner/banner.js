import React, { useEffect, useState } from 'react';
import styles from './banner.module.css';
import bannerBack from '../../../images/banner_back.gif';
import bannerFont from '../../../images/banner_font.png';

function Banner() {
    const [bannerBackShow, setBannerBackShow] = useState(false);
    const [bannerFontShow, setBannerFontShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setBannerFontShow(true);
        }, 500);
        setTimeout(() => {
            setBannerBackShow(true);
        }, 1000);
    });

    return (
        <div className={styles.banner}>
            <img src={bannerBack} alt='배너_배경' className={bannerBackShow ? styles.imgBackShow : styles.imgBackHidden}/>
            <img src={bannerFont} alt='배너_폰트' className={bannerFontShow ? styles.imgFontShow : styles.imgFontHidden}/>
        </div>
    )
}

export default Banner;