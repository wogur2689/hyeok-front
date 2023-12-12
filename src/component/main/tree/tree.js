import styles from './tree.module.css';

//1. data
const datas = [
    {
        id: '0',
        key: "학력",
        period: "2018 ~ 2022",
        value: [
            "동양미래대학교 컴퓨터정보공학과"
            ,"학점 3.6"
            ,"졸업작품 우수상"
            ,"구로구청app장려상"
            ,"AI 우수상"
            ,"포트폴리오 장려상"
        ]
    },
    {
        id: '1',
        key: "경력",
        period: "2021 ~ 현재",
        value: [
            "디지털마케터 인턴 1개월"
            ,"SI 경력 1년"
        ]
    },
    {
        id: '2',
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
        id: '3',
        key: "팀",
        period: "2021 ~ 현재",
        value: [
            "DMC - android(kotlin) + admin"
            ,"Site - React + Spring"
            ,"영화 웹사이트 - React"
        ]
    },
    {
        id: '4',
        key: "자격",
        period: "2021 ~ 현재",
        value: [
            "컴퓨터 활용능력 1급"
            ,"리눅스 마스터 2급"
            ,"정보처리산업기사"
            ,"NAVER CLOUD PLATFORM Certified Associate"
        ]
    }
]

//2. 도형
export const One = ({title}) => {
    return (
        <div className={styles.one}>{title}</div>
    )
}

//3. 설명
export const Explanation = (props) => {
    return (
        <div className={styles.explanation}>
            {datas.map((v) => {
                return (
                    <>
                        <h2>{props.idx === v.id ? v.period : ""}</h2>
                        <p>
                            {props.idx === v.id ? v.value.map((v) => {
                                return <>- {v}<br/></>
                            }) : ""}
                            <br/>
                        </p>
                    </>
                )
            })}
        </div>
    )
}

//pages
function Tree() {
    return (
        <div className={styles.tree}>
            <div className={styles.line}>
                <One title={"학력"}/>
                <Explanation idx={"1"}/>
                <One title={"개인"}/>
                <Explanation idx={"3"}/>
                <One title={"자격"}/>
            </div>
            <div className={styles.line}>
                <Explanation idx={"0"}/>
                <One title={"경력"}/>
                <Explanation idx={"2"}/>
                <One title={"팀"}/>
                <Explanation idx={"4"}/>
            </div>
        </div>
    )
}

export default Tree;