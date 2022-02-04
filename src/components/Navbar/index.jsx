import { NavLink } from "react-router-dom";
import "./Navbar.css"

export const Navbar = (props) => {

    const propStyle = props.classAttr
    const classAtrr="navbar navbar-expand-lg navbar-dark "
    const classAll = classAtrr + propStyle

    return (
        <nav className={classAll}>
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Collection</NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ justifyContent: 'space-between' }}>

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 " style={{ alignItems: 'center' }}>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

