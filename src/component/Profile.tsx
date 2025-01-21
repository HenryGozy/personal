import MyProfile from '../assets/20250112_093903.jpg'
export default function Profile(){
    return(
        <>
        <section className="Profile">
            <div className='Profile_card'>
                <img src={MyProfile} alt="" className='prp' />
                <h1>Henry Gozy</h1>
                <div id='socials'>
                <i className="fa-brands fa-x-twitter"></i>
                <i className="fa-brands fa-square-github"></i>
                <i className="fa-brands fa-linkedin"></i>
                </div>
                <p className='prp_text'>Frontend Developer | React Enthusiast | lifelong Learner </p>
                <button className='prp_btn'>contanct me  <i className="fa-solid fa-phone"></i></button>
            </div>
        </section>
        </>
    )
 }