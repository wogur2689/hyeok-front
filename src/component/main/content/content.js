import axios from 'axios';
import styles from './content.module.css';
//import Login from './member/login';
//import SignUp from './member/signup';

const getPing = async () => {
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

function Content() {
    return (
    <div className={styles.content}>
      {/*Hello World!<br/>
      연결테스트!
      <button onClick={getPing}>ping</button>
    <hr></hr>*/}
      컨텐츠
    </div>
    );
}

export default Content;