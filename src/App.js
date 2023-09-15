import './App.css';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import Main from './component/main/main';
import Login from './component/main/content/member/login';
import SignUp from './component/main/content/member/signup';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
      {/* <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signUp" element={<SignUp />}></Route>
          </Routes>
      </BrowserRouter>
      <Footer/> */}
    </div>      
  );
}

export default App;
