import ProjectImg from "/src/assets/devconnect .png"
import One from "/src/assets/ONE.png"
import Shop from "/src/assets/shopingCart.png"
export default function Project(){
    return (
        <>
        <div className="Project">
            <h2 >PROJECT :</h2>
            <div  className="Project_grid">
                <div className="Project_card">
                    <h3>Invideo Ai</h3>
                    <div className="project_cont">
                        <img src={One} alt="" />
                        <div className="PrpC">
                            <p>DevConnect a platform which let devs to find and connect with one another created using Html | Css | Javascript | React | Typescript <a href="">visit site</a></p>
                        </div>
                    </div>
                </div>
                <div className="Project_card">
                    <h3>DevConnect</h3>
                    <div className="project_cont">
                        <img src={ProjectImg} alt="" />
                        <div className="PrpC">
                            <p>DevConnect a platform which let devs to find and connect with one another created using Html | Css | Javascript | React | Typescript <a href="">view code</a></p>
                        </div>
                    </div>
                </div>

                <div className="Project_card">
                    <h3>DevConnect</h3>
                    <div className="project_cont">
                        <img src={Shop} alt="" />
                        <div className="PrpC">
                            <p>DevConnect a platform which let devs to find and connect with one another created using Html | Css | Javascript | React | Typescript <a href="">view code</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}