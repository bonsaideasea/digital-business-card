import './App.css'


function Info() {
    return (
        <>
            <div className="judge-me">
                <div>
                    <img className="face-pic" src="facecard.png" width={300} height={250}></img>
                </div>
                <div className="contact-info">
                    <h2 className="my-name">bonsai.</h2>
                    <h3>bonsaideasea@gmail.com</h3>
                    <h3><a target='_blank' href="https://bonsaideasea.com/"> bonsaideasea.com</a></h3>
                </div>
            </div>
        </>
    )
}

export default Info