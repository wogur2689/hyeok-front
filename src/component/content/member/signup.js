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
    const [userId, setUserId] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const onChangeUserId = (e) => {
      setUserId(e.target.value);
    };
    const onChangeName = (e) => {
      setName(e.target.value);
    };
    const onChangePassword = (e) => {
      setPassword(e.target.value);
    };
    const onChangeAddress = (e) => {
      setAddress(e.target.value);
    }
    const onChangePhoneNumber = (e) => {
      setPhoneNumber(e.target.value);
    }
    return(
        <section>
            <h1>회원가입</h1>
            <form method="post" action="/member/signup">
                <input type="text" name="userId" placeholder="아이디" onChangeUserId={onChangeUserId} value={userId}/>
                <input type="text" name="name" placeholder="이름" ohnChangeName={onChangeName} value={name}/>
                <input type="password" name="password" placeholder="비밀번호" onChangePassword={onChangePassword} value={password}/>
                <input type="text" name="address" placeholder="주소" ohnChangeAddress={onChangeAddress} value={address}/>
                <input type="text" name="phoneNumber" placeholder="전화번호" ohnChangeName={onChangePhoneNumber} value={phoneNumber}/>
                <input type="submit" value="가입" onClick={signup}/>
            </form>
        </section>
    )
}

export default SignUp;