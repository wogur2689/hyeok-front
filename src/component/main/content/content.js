//import axios from 'axios';
import Login from './member/login';
import SignUp from './member/signup';
import styles from './content.module.css';
import { Link, Route, Routes } from 'react-router-dom';
//import Login from './member/login';
//import SignUp from './member/signup';

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
      <div className={styles.contents}>
        <div className={styles.nemo1}>
          <Link to="/login">로그인</Link>
          <Link to="/signup">회원가입</Link>
        </div>
        <div className={styles.nemo2}>

        </div>
        <div className={styles.nemo3}>

        </div>
      </div>
      {/*<Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
    </Routes>*/}
    
      {/*Hello World!<br/>
      연결테스트!
      <button onClick={getPing}>ping</button>
    <hr></hr>*/}
    </div>
    );
}

export default Content;