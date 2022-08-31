//import axios from 'axios';
import Login from './member/login';
import styles from './content.module.css';
import { Link, Route, Routes } from 'react-router-dom';
import Time from './time/time';
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
          <Link to="/login" style={styles.Link}>로그인</Link>
          <Time/>
        </div>
        <div className={styles.nemo2}>

        </div>
        <div className={styles.nemo3}>

        </div>
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