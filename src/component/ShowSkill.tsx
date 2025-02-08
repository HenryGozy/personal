
export default function ShowSkill({
  onDisplay,
  hideSkillShow,
  currentEdit,
}: {
  onDisplay: boolean;
  hideSkillShow: () => void;
  currentEdit: {
    name: string;
    img: string;
    about: string;
    skills: string[];
    href: string;
    livesite?: string;
  };
}) {
  console.log(currentEdit);
  return (
    <>
      {onDisplay && (
        <section className="ShowSkillCardCont">
          <div className="ShowSkillCard">
            <button onClick={hideSkillShow} className="cancel">
            <i className="fa-solid fa-x"></i>
            </button>
            <div className="innerCont">
              <h1>{currentEdit.name}</h1>
              <img src={currentEdit.img} alt="" />
              <ul>
                {currentEdit.skills.map((skill) => (
                  <li>{skill}</li>
                ))}
              </ul>
              <p>{currentEdit.about}</p>
              <div className="code_button">
                  <button>
                    <a href={currentEdit.href} target=".blank">
                      live code
                    </a>
                  </button>
                  {currentEdit.livesite && (
                    <button>
                      <a href={currentEdit.livesite} target=".blank">
                        live site
                      </a>
                    </button>
                  )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
