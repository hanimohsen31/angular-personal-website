import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { Team } from "../components/Team"
import { ChatbotComp } from "../components/ChatbotComp"

export const About = () => {
    return (
        <>
        <Navbar classAttr={'bg-dark'}/>
        <h1 className="text-center wow fadeInUp" style={{'margin':'100px auto 30px'}}>Collection Co.</h1>

        <Team/>
        <ChatbotComp />

        <Footer/>
        </>
    )
}