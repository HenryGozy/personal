type SkillType ={
    src?:string | undefined
    classname?:string
    skillname:string
}

export default function SkillsCard({src,skillname,classname}:SkillType) {
    return (
        <>
            <div className="skill_imagCont">
               {src && <img src={src} />}
                <i className={classname}></i>
                <p>{skillname}</p>
            </div>
        </>
    )
}