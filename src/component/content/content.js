import axios from 'axios';
import Login from './member/login';
import SignUp from './member/signup';

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
    <div>
      Hello World!<br/>
      연결테스트!
      <button onClick={getPing}>ping</button>
      <hr></hr>
      <SignUp/>
      <Login/>
    </div>
    );
}

export default Content;