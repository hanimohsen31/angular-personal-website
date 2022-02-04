import { Contact } from "../components/Contact"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"

export const ContactPage = () => {
    return (
        <>
        <Navbar classAttr={"bg-dark"}/>
        <h1 className="text-center" style={{'margin':'100px auto 30px'}}>This is our Contacts</h1>
        <h4 className="text-center" >Feel free to get in touch with us anytime</h4>
        <div className="text-center" >
            <h4 className="my-2" >Facebook : <a href="https://www.facebook.com/Collection2050" rel="noreferrer" target='_blank'> Collection </a></h4>
            <h4 className="my-2" >Behance : <a href="https://www.behance.net/hanimohsen3810" rel="noreferrer" target='_blank'> Behance Gallary </a></h4>

        </div>
        <h3 className="text-center my-2" >You can also send us your opinions through this form</h3>
        <Contact/>
        <Footer/>
        </>
    )
}