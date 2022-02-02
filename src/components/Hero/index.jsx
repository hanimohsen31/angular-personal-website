import './Hero.css'
import heroImg from "./../../static/img/p4.jpg"

export const Hero = () => {
    return (
        <>
            <div className='hero'>
                <div className='heroImgContain'><img className='heroImg' src={heroImg} alt='img' /></div>
                <div className='heroContent'>
                    <div className="heroText">
                        <h1>Create Your Own Dream Design ...</h1>
                        <h6>Start Making your dreame come true today</h6>
                    </div>
                    <div className='heroButtons'>
                        <a href='https://wa.me/201116886029' rel="noreferrer" target='_blank'>
                            <button className='btn btn-danger rounded-pill'>Get Started Today</button>
                        </a>
                        <a href='https://wa.me/201116886029' rel="noreferrer" target='_blank'>
                            <button className='btn btn-outline-light rounded-pill' >Contact Us</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}