import H2 from "../H2"
import SkillsCard from "../../Skills"
export default function Skill() {
    return (
        <>
            <div className="skill_cards">
                <H2 title="SKILLS" />
                <div className="skill_grid"> 
                    <div className="skill_card">
                        <h3>Frontend Fundermental</h3>
                        <div className="inner_card">
                            <SkillsCard src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' skillname="html" />
                            <SkillsCard src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' skillname="css" />
                            <SkillsCard src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" skillname="javascript"/>
                        </div>

                        <div className="aboutSkills">
                            <ul>
                                <li>
                                    <span className="heading">html & css</span> : Building responsive websites.
                                </li>

                                <li>
                                    <span>javascript</span> : ES6+ basics and DOM manipulation.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="skill_card">
                        <h3>React & Next.js</h3>
                        <div className="inner_card">
                            <SkillsCard src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' skillname="react" />
                            <SkillsCard src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' skillname="next js" />
                        </div>

                        <div className="aboutSkills">
                            <ul>
                                <li>
                                    <span className="heading">react</span> : Components, hooks (useState, useEffect), state, and props.
                                </li>

                                <li>
                                    <span>nextjs</span> : Learning server-side rendering and static site generation.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="skill_card">
                        <h3>Typescript</h3>
                        <div className="inner_card">
                            <SkillsCard src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' skillname="Typescript" />
                        </div>

                        <div className="aboutSkills">
                            <ul>

                                <li>
                                Writing safer, type-checked code.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="skill_card">
                        <h3>React & Next.js</h3>
                        <div className="inner_card">
                            <SkillsCard src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' skillname="git" />
                            <SkillsCard classname='devicon-github-original' skillname="git hub" />
                        </div>

                        <div className="aboutSkills">
                            <ul>
                                <li>
                                <span>Git & GitHub</span>: Code management and collaboration.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}