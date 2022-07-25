import React, { useState } from "react";
import axios from 'axios';

function SignUp() {
    const [inputs, setInputs] = useState({
        userId: '',
        userName: '',
        nickName: '',
        password: '',
        address: '',
        phoneNumber: ''
    });

    const { userId, userName, nickName, password, address, phoneNumber } = inputs; // 비구조화 할당을 통해 값 추출

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
        name: inputs.userName,
        nick_name: inputs.nickName,
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
            userName: '',
            nickName: '',
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
                <input type="text" name="userName" placeholder="이름" onChangeName={onChange} value={userName}/>
                <input type="text" name="nickName" placeholder="닉네임" onChangeNickName={onChange} value={nickName}/>
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