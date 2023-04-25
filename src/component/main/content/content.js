//import axios from 'axios';
import Login from './member/login';
import styles from './content.module.css';
import { Link, Route, Routes } from 'react-router-dom';
//import Login from './member/login';
//import SignUp from './member/signup';

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

/*const getPing = async () => {
    try {
      const {data} = await axios.get('http://localhost:8080/api/ping'
      ,{params: {
        a123: "React!"
      }});
      return data;
    } catch (error) {
      console.error(error);
    }
    return null;
  };
*/
function Content() {
    return (
    <div className={styles.content}>
      {/* 프로필 */}
      <div className={styles.profile}>
        <div className={styles.picture}></div>
        {contentData.map((data) => 
          <div className={styles.textLine}>{data.key} : {data.value}</div>
        )}
      </div>
      {/* 프로젝트들 */}
      <div className={styles.contents}>
        <img src="img/caret-left.png" alt="왼쪽" className={styles.imgButton}/>
        <div className={styles.nemo}></div>
        <img src="img/caret-right.png" alt="오른쪽" className={styles.imgButton}/>
      </div>
      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    
      {/*Hello World!<br/>
      연결테스트!
      <button onClick={getPing}>ping</button>*/}
    </div>
    );
}

export default Content;