import './App.css';
import axios from 'axios';

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

function App() {
  return (
    <div>
      Hello World!<br/>
      연결테스트!
      <button onClick={getPing}>ping</button>
    </div>
  );
}

export default App;
