export default function Contanct(){
    return(
        <>
        <div className="Contact">
            <h2>CONTACT :</h2>
            <form action="" id="form">
                <span>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Henry"/>
                </span>
                
                <span>
                    <label htmlFor="email">Email Adress</label>
                    <input type="text" id="email" name="email" placeholder="example@gmail.com"/>
                </span>

                <span>
                    <label htmlFor="mess">Message</label>
                    <textarea name="mess" id="mess"></textarea>
                </span>

                <button type="submit" id="btn">submit</button>
            </form>
        </div>
        </>
    )
}