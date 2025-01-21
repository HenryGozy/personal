
import { useState } from "react"
interface aDetail {
    head: string
    content: string
    toggle: boolean
}
export default function About() {
    const [aboutDetail, setAboutDetail] = useState<aDetail>({
        head: "ABOUT",
        content: "Hi, I’m Henry! An 18-year-old web developer specializing in creating clean, responsive websites. My focus is on mastering modern tools like React and TypeScript to deliver impactful digital experiences",
        toggle: true
    })
    function Toggle() {
        setAboutDetail(prev => ({ ...prev, toggle: !aboutDetail.toggle }))
    }
    return (
        <>
            <div className="About_card">
                <h2>{aboutDetail.head}
                    {!aboutDetail.toggle?
                        <i className="fa-solid fa-angle-down" onClick={Toggle}></i> :
                        <i className="fa-solid fa-angle-up" onClick={Toggle}></i>}
                </h2>
                {aboutDetail.toggle && <p>{aboutDetail.content}</p>}
            </div>
        </>
    )
}