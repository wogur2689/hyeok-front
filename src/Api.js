import axios from 'axios';

// GET 요청 전송
axios({
    method: "get",
    url: "https://localhost:8080/api/ping",
    responseType: "type"
});

export default Api;