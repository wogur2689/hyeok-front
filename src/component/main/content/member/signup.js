import React, { useState } from "react";
import axios from 'axios';

const signup = async () => {
    try {
      const {data} = await axios.get('http://localhost:8080/member/api/signup'
      ,{params: {
        userId:"userId",
        name:"name",
        password:"password"
      }});
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
    return null;
};

function SignUp() {
    const [inputs, setInputs] = useState({
        userId: '',
        name: '',
        password: '',
        address: '',
        phoneNumber: ''
    });

    const onChange = (e) => {
      const { value, name } = e.target;
      setInputs({
        ...inputs,
        [name]: value
      });
    };

    const postPing = async() => {
      let signUpReq = {
        user_id: inputs.userId,
        name: inputs.name,
        password: inputs.password,
        address: inputs.address,
        phoneNumber: inputs.phoneNumber
      }
      // 전송
        const res = await axios.post(
          'http://localhost:8080/member/signup',
          signUpReq,
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
            name: '',
            password: '',
            address: '',
            phoneNumber: ''
          }) //폼에 입력된 값 초기화 
          return res;
    }

    return(
        <section>
            <h1>회원가입</h1>
            <form onSubmit={(e) => {e.preventDefault(); postPing();}}>
                <input type="text" name="userId" placeholder="아이디" onChangeUserId={onChange} value={userId}/>
                <input type="text" name="name" placeholder="이름" ohnChangeName={onChange} value={name}/>
                <input type="password" name="password" placeholder="비밀번호" onChangePassword={onChange} value={password}/>
                <input type="text" name="address" placeholder="주소" ohnChangeAddress={onChange} value={address}/>
                <input type="text" name="phoneNumber" placeholder="전화번호" ohnChangeName={onChange} value={phoneNumber}/>
                <button type="submit">가입</button>
            </form>
            <p>결과 : {postPing && "0000" ? "성공" : "실패"}</p>
        </section>
    )
}

export default SignUp;