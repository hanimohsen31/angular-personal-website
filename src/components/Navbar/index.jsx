import { NavLink } from "react-router-dom";
import "./Navbar.css"

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ">
            <div class="container-fluid">
                <NavLink className="navbar-brand" to="/">Hani Mohsen</NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ justifyContent: 'space-between' }}>

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 " style={{ alignItems: 'center' }}>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/homein">Home</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/tvshows">TV Shows</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/movies">Movies</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/mylist">My List</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/terms">Terms</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

