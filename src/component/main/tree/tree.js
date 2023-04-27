import styles from './tree.module.css';

const datas = [
    {
        key: "학력",
        period: "2018 ~ 2022",
        value: [
            "동양미래대학교 컴퓨터정보공학과 전문학사"
            ,"학점 3.6"
            ,"졸업작품 우수상"
            ,"구로구청app장려상"
            ,"AI 우수상"
            ,"포트폴리오 장려상"
        ]
    },
    {
        key: "경력",
        period: "2021 ~ 현재",
        value: [
            "디지털마케터 인턴 1개월 [(주) 우리템]"
            ,"SI 경력 1년 [(주) 크림솔루션]"
        ]
    },
    {
        key: "개인",
        period: "2021 ~ 현재",
        value: [
            "나만의 웹사이트 - PHP"
            ,"MP3 - React"
            ,"plant - android"
            ,"버블버블 - Python"
        ]
    },
    {
        key: "팀",
        period: "2021 ~ 현재",
        value: [
            "DMC - android"
            ,"Site - React + Spring"
            ,"영화 웹사이트 - React"
        ]
    },
    {
        key: "자격",
        period: "2021 ~ 현재",
        value: [
            "컴퓨터 활용능력 1급"
            ,"정보처리산업기사"
        ]
    }
]

function Tree() {
    return (
        <div className={styles.tree}>
            <div>
                
            </div>
            <div>

            </div>
        </div>
    )
}

export default Tree;