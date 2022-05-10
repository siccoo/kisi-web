import { NavLink } from "react-router-dom"
import Kisi from "../../assets/img/Kisi.jpg";
import "./Navbar.css"

const Navbar = () => {
    return (
        <header>
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink exact className="nav__link-header inflex-flex items-center py-6 px-3 mr-4 hover:text-white-400 text-2xl font-bold cursive tracking-widest" to="/" activeClassName="text-white">Kisi~Deals
                    </NavLink>
                    <NavLink to="/about" className="inline-flex items-center py-1 px-3 my-6 rounded text-white-100 hover:text-indigo-900" activeClassName="text-red-100">About</NavLink>
                    <NavLink to="/project" className="inline-flex items-center py-1 px-3 my-6 rounded text-white-100 hover:text-indigo-900" activeClassName="text-red-100">Projects</NavLink>
                    <NavLink to="/post" className="inline-flex items-center py-1 px-3 my-6 rounded text-white-100 hover:text-indigo-900" activeClassName="text-red-100">Blog</NavLink>
                    {/* <NavLink to="/about">About</NavLink> */}

                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <button type="submit" className="btn__subscribe mr-4">Subscribe</button>
                </div>
            </div>
        </header>
    )
}

export default Navbar