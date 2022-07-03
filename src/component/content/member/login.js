import React, { useState } from "react";

function Login() {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const onChangeUserId = (e) => {
        setUserId(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    return(
        <section>
            <h1>로그인</h1>
            <form method="post" action="/member/login">
                <input type="text" name="userId" placeholder="아이디" onChangeUserId={onChangeUserId} value={userId}/>
                <input type="password" name="password" placeholder="비밀번호" onChangePassword={onChangePassword} value={password}/>
                <input type="submit" value="가입"/>
            </form>
        </section>
    )
}

export default Login;