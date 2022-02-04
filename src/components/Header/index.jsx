import { Hero } from "../Hero"
import { Navbar } from "../Navbar"

export const Header = (props) => {
    // console.log('props Header')
    // console.log(props)

    return (
        <>
        <div className="Header">
            <header>
                <Navbar/>
                <Hero img={props.img}/>
            </header>
        </div>
        </>
    )
}