import styles from './content.module.css';
import macarons from '../../../images/macarons.jpg'

const contentData = [
  {
    key: "이름",
    value: "길재혁",
  },
  {
    key: "생년",
    value: "1999년",
  },
  {
    key: "직업",
    value: "개발자",
  },
]

function Content() {
    return (
      <div className={styles.content}>
        {/* 프로필 */}
        <div className={styles.profile}>
          <div className={styles.picture}>
            <img src={macarons} alt='프로필 사진' className={styles.picImg}/>
          </div>
          {contentData.map((data) => 
            <div className={styles.textLine}>{data.key} : {data.value}</div>
          )}
        </div>
        {/* 프로젝트들 */}
        <div className={styles.contents}>
          {/* <img src="img/caret-left.png" alt="왼쪽" className={styles.imgButton}/> */}
          <div className={styles.nemo}>
          {/* YOUTUBE VIDEO */}
          <iframe src="https://www.youtube.com/embed/DMcRIihAq9Q" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; 
              autoplay; 
              clipboard-write; 
              encrypted-media; 
              gyroscope; 
              picture-in-picture; 
              web-share" 
            allowfullscreen
            className={styles.youtube}></iframe>
          </div>
          {/* <img src="img/caret-right.png" alt="오른쪽" className={styles.imgButton}/> */}
        </div>
      </div>
    );
}

export default Content;