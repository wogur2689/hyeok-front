import React, { useEffect, useRef, useState } from 'react';
import styles from './banner.module.css';

function Banner() {
    const [bannerBackShow, setBannerBackShow] = useState(false);
    const [bannerFontShow, setBannerFontShow] = useState(false);
    
    const bannerBack = useRef(null);
    const bannerFont = useRef(null);

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
            <img src="img/banner_back.gif" alt='배너_배경' ref={bannerBack} className={bannerBackShow ? styles.imgBackShow : styles.imgBackHidden}/>
            <img src="img/banner_font.png" alt='배너_폰트' ref={bannerFont} className={bannerFontShow ? styles.imgFontShow : styles.imgFontHidden}/>
        </div>
    )
}

export default Banner;