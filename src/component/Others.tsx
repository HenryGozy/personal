import About from "./othersComponent/About.tsx"
import Skill from "./othersComponent/Skill.tsx"
import Contanct from "./othersComponent/Contact.tsx"
import Project from "./othersComponent/Project.tsx"

export default function (){
    return(
        <>
        <section className="Others">
            <About />
            <Skill />
            <Project />
            <Contanct />
        </section>
        </>
    )
}