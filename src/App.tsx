import Profile from "./component/Profile"
import Others from "./component/Others"
import "./App.css"
export default function App(){
  return(
    <>
    <div className="root_header">
      <span className="header">
        <h2><span className="pee">p</span>ersonal <span className="pee">P</span>orfolio</h2>
        <button>contact me <i className="fa-solid fa-phone"></i></button>
      </span>
      <div className="root">
        <Profile />
        <Others />
      </div>
    </div>
    </>
  )
}