import H2 from "../H2";
import { nanoid } from "nanoid";
import { ProjectCards } from "../../data";
import { useState } from "react";
import ShowSkill from "../ShowSkill";

type Current =  {
    name: string;
    img: string;
    about: string;
    skills: string[];
    href: string;
    livesite?:string
};

export default function Project() {
  const [onDisplay, setOnDisplay] = useState<boolean>(false);
  const [currentEdit, setCurrentEdit] = useState<Current>({name:"",img:"",about:"",skills:[],href:"",livesite:""});
  const cardState = ProjectCards.map((item) => ({...item,id: nanoid(),}))

  console.log(cardState);
  function handleClick(id: string | undefined) {
    const data = cardState.find((item) => item.id === id);
    if (data) {
      setCurrentEdit(data);
    }
    setOnDisplay(true);
  }
  function hideSkillShow() {
    setOnDisplay(false);
  }
  return (
    <>
      <div className="Project">
        <H2 title="PROJECT" />
        <div className="Project_grid">
          {cardState.map((item) => (
            <div
              key={item.name}
              className="Project_card"
              onClick={() => handleClick(item.id)}
            >
              <h3 className="">{item.name}</h3>

              <img src={item.img} alt="" />
              <div className="project_cont">
                <div className="Skills">
                  <ul>
                    {item.skills?.map((skill) => (
                      <li>{skill}</li>
                    ))}
                  </ul>
                </div>
                <div className="PrpC">
                  <p>{item.about}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ShowSkill
        onDisplay={onDisplay}
        hideSkillShow={hideSkillShow}
        currentEdit={currentEdit}
      />
    </>
  );
}
