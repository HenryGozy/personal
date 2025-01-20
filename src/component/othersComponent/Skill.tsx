import H2 from "../H2"
export default function Skill() {
    return (
        <>
            <div className="skill_cards">
                <H2 title="SKILLS"/>
                <div className="skill_grid">
                    <div>   
                        <h3>Core Web Skill</h3>
                        <div className="skill_card">
                            <span className="skill_cont">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                                <p>html 5</p>
                            </span>
                            <span className="skill_cont">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                                <p>Css</p>
                            </span>

                            <span className="skill_cont">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                                <p>javascript </p>
                            </span>
                        </div>
                    </div>

                    <div>
                        <h3>Frame Work</h3>
                        <div className="skill_card">
                            <span className="skill_cont">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                                <p>react</p>
                            </span>
                            <span className="skill_cont">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                                <p>tailwind Css</p>
                            </span>

                        </div>
                    </div>

                    <div>
                        <h3>programing</h3>
                        <div className="skill_card">
                            <span className="skill_cont">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                                <p>typescript</p>
                            </span>

                        </div>
                    </div>
                    <div>
                        <h3>Version Control</h3>
                        <div className="skill_card">
                            <span className="skill_cont">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                                <p>git</p>
                            </span>
                            <span className="skill_cont">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                                <p>git hub</p>
                            </span>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}