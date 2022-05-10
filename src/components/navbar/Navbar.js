import { NavLink } from "react-router-dom"
import Kisi from "../../assets/img/Kisi.jpg"

const Navbar = () => {
    return (
        <header>
            <div>
                <nav>
                    <NavLink className="navbar-brand" to="/" aria-label="Front">Kisi~Deals
                    </NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/project">Projects</NavLink>
                    <NavLink to="/post">Post</NavLink>
                    {/* <NavLink to="/about">About</NavLink> */}
                </nav>
            </div>
        </header>
    )
}

export default Navbar