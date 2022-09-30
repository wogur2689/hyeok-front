import './App.css';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import Main from './component/main/main';
import Login from './component/main/content/member/login';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
      </BrowserRouter>
      <Footer/>
    </div>      
  );
}

export default App;
