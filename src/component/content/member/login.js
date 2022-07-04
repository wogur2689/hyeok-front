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
    
      const onReset = () => {
        setInputs({
          userId: userId,
          password: password,
        })
      };

      const postPing = async () => {
        try {
          const data = await axios.post(URL='http://localhost:8080/member/login'
        ,{
            user_id: inputs.userId,
            password: inputs.password
          });
          console.log(data);
        } catch (error) {
          console.log(error);
        }
        return null;
      };

    return(
        <section>
            <h1>로그인</h1>
            <form method="post" action="/member/login">
                <input type="text" name="userId" placeholder="아이디" onChange={onChange} value={userId}/>
                <input type="password" name="password" placeholder="비밀번호" onChange={onChange} value={password}/>
                <button onClick={postPing}>전송</button>
                <button onClick={onReset}>초기화</button>
            </form>
        </section>
    )
}

export default Login;