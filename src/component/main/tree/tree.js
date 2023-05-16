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
            "디지털마케터 인턴 1개월"
            ,"SI 경력 1년"
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
            "DMC - android(kotlin)"
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
            <div className={styles.line}>
                <div className={styles.one}>
                    학력
                </div>
                <div className={styles.explanation}>
                    <h2>2021 ~ 현재</h2>
                    <p>
                        → 스타트업 디지털마케터 인턴 1개월<br/>
                        → SI 경력 1.5년
                    </p>
                </div>
                <div className={styles.one}>
                    개인
                </div>
                <div className={styles.explanation}>
                <h2>2021 ~ 현재</h2>
                <p>
                    → DMC - android<br/>
                    → Site - React + Spring<br/>
                    → 영화 웹사이트 - React<br/>
                </p>
                </div>
                <div className={styles.one}>
                    자격
                </div>
            </div>
            <div className={styles.line}>
                <div className={styles.explanation}>
                    <h2>2018 ~ 2022</h2>
                    <p>
                        동양미래대학교 컴퓨터정보공학과<br/>
                        → 학점 3.6<br/>
                        → 졸업작품 우수상<br/>
                        → AI 우수상<br/>
                        → 포트폴리오 장려상<br/>
                    </p>
                </div>
                <div className={styles.one}>
                    경력
                </div>
                <div className={styles.explanation}>
                    <h2>2021 ~ 현재</h2>
                    <p>
                        → 나만의 웹사이트 - PHP<br/>
                        → Mp3 - React<br/>
                        → plant - android<br/>
                        → 버블버블 - Python<br/>
                    </p>
                </div>
                <div className={styles.one}>
                    팀
                </div>
                <div className={styles.explanation}>
                    <h2>2021 ~ 현재</h2>
                    <p>
                        → 컴활 1급<br/>
                        → 정보처리산업기사 (아직)
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Tree;