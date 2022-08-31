import style from './time.module.css';

function showClock() {
    var clock = document.getElementById("clock"); //현재시간을 띄울 곳
    var currentDate = new Date(); //Date객체 생성
    var msg = "현재시각 " + currentDate.getHours(); //시
    msg += ":" + currentDate.getMinutes(); //분

    clock.innerText = msg; //현재시간 띄우기

    setTimeout(showClock, 1000); //1초마다 함수 호출
}

function Time() {
    return (
        <div className={style.data} id="clock" onLoad={showClock}></div>
    );
}

export default Time;