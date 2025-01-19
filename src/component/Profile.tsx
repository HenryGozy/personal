import MyProfile from '../assets/20250112_093903.jpg'
export default function Profile(){
    return(
        <>
        <section className="Profile">
            <div className='Profile_card'>
                <img src={MyProfile} alt="" className='prp' />
                <h1>Henry Gozy</h1>
                <p className='prp_text'>Frontend Developer | React Enthusiast | lifelong Learner </p>
                <button className='prp_btn'>contanct me  <i className="fa-solid fa-phone"></i></button>
            </div>
        </section>
        </>
    )
 }