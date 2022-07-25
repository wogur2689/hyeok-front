import axios from 'axios';
import React, { useState } from "react";

function Login() {
    const [inputs, setInputs] = useState({
        userId: '',
        password: ''
      });
    
      const { userId, password } = inputs; // 비구조화 할당을 통해 값 추출
    
      const onChange = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputs({
          ...inputs, // 기존의 input 객체를 복사한 뒤
          [name]: value // name 키를 가진 값을 value 로 설정
        });
      };
  

      const postPing = async() => {
        let loginReq = {
          user_id: inputs.userId,
          password: inputs.password
        }
        // 전송
          const res = await axios.post(
            'http://localhost:8080/member/login',
            loginReq,
            {headers: {
              "Content-Type": 'application/json'
            }},
          ).then(response => {
              return response.data.head.result_code;
            }).catch(error => {
              console.log(error);
            });
            
            setInputs({
              userId: '',
               password: ''}) //폼에 입력된 값 초기화 
            return res;
        };

    return(
        <section>
            <h1>로그인</h1>
            <form onSubmit={(e) => {e.preventDefault(); postPing();}}>
                <input type="text" name="userId" placeholder="아이디" onChange={onChange} value={userId}/>
                <input type="password" name="password" placeholder="비밀번호" onChange={onChange} value={password}/>
                <button type="submit">로그인</button>
            </form>
            <p>결과 : {postPing && "0000" ? "성공" : "실패"}</p>
        </section>
    )
}

export default Login;