import MyProfile from '../assets/20250112_093903.jpg'
export default function Profile(){
    return(
        <>
        <section className="Profile">
            <div className='Profile_card'>
                <img src={MyProfile} alt="" className='prp' />
                <h1>Henry Gozy</h1>
                <div id='socials'>
                <a href="https://x.com/Gozy_Dev" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="https://github.com/HenryGozy"><i className="fa-brands fa-square-github"></i></a>
                <i className="fa-brands fa-linkedin"></i>
                </div>
                <p className='prp_text'>Frontend Developer | React Enthusiast | lifelong Learner </p>
                <button className='prp_btn'>reach out </button>
            </div>
        </section>
        </>
    )
 }