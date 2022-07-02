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
    return(
        <section>
            <h1>회원가입</h1>
            <form method="post" action="/member/signup">
                <input type="text" name="userId" placeholder="아이디">아이디 </input>
                <input type="text" name="name" placeholder="이름">이름 </input>
                <input type="password" name="password" placeholder="비밀번호">비밀번호 </input>
                <input type="submit" value="가입" onClick={signup}></input>
            </form>
        </section>
    )
}

export default SignUp;