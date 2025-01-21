import ProjectImg from "/src/assets/devconnect .png"
import One from "/src/assets/ONE.png"
import Shop from "/src/assets/shopingCart.png"
import todo from "/src/assets/todo.png"
import H2 from "../H2"
export default function Project(){
    return (
        <>
        <div className="Project">
            <H2 title="PROJECT"/>
            <div  className="Project_grid">
                <div className="Project_card">
                    <h3>Invideo Ai</h3>
                    <div className="project_cont">
                        <img src={One} alt="" />
                        <div className="PrpC">
                            <p>DevConnect a platform which let devs to find and connect with one another created using Html | Css | Javascript  <br /> <a href="https://github.com/HenryGozy/invideo-ai" target="_blank" rel="noopener noreferrer">visit code</a></p>
                        </div>
                    </div>
                </div>
                <div className="Project_card">
                    <h3>DevConnect</h3>
                    <div className="project_cont">
                        <img src={ProjectImg} alt="" />
                        <div className="PrpC">
                            <p>DevConnect a platform which let devs to find and connect with one another created using Html | Css | Javascript | React | Typescript <br /> <a href="https://github.com/HenryGozy/DevConnect" target="_blank" rel="noopener noreferrer">view code</a></p>
                        </div>
                    </div>
                </div>

                <div className="Project_card">
                    <h3>shoping cart</h3>
                    <div className="project_cont">
                        <img src={Shop} alt="" />
                        <div className="PrpC">
                            <p>shoping cart platform  created using Html | Css | Javascript | <br /> <a href="https://github.com/HenryGozy/shop" target="_blank" rel="noopener noreferrer">view code</a></p>
                        </div>
                    </div>
                </div>

                <div className="Project_card">
                    <h3>shoping cart</h3>
                    <div className="project_cont">
                        <img src={todo} alt="" />
                        <div className="PrpC">
                            <p>Simple todo app that allow user to create , remove and edit task  created using Html | Css | Javascript | React | Typescript <br /> <a href="https://github.com/HenryGozy/Simple-To-Do-App" target="_blank" rel="noopener noreferrer">view code</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}