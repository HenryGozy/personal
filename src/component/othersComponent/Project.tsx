
import H2 from "../H2"
import { ProjectCards } from "../../data"
export default function Project(){
    return (
        <>
        <div className="Project">
            <H2 title="PROJECT"/>
            <div  className="Project_grid">
                {ProjectCards.map((item)=> <div key={item.name} className="Project_card">
                <h3 className="">{item.name}</h3>

                    <img src={item.img} alt="" />
                    <div className="project_cont">
                        <div className="Skills">
                            <ul>
                                {item.skills?.map((skill)=> <li>{skill}</li>)}
                            </ul>
                        </div>
                        <div className="PrpC">
                            <p>{item.about}</p>
                        </div>
                    </div>
                </div>) }
           

            </div>
        </div>
        </>
    )
}