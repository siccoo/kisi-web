import { NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    return (
        <header>
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink exact className="nav__link-header inflex-flex items-center py-6 px-5 mr-4 hover:text-white-900 text-2xl font-bold cursive tracking-widest" to="/" activeClassName="text-white">Kisi~Deals
                    </NavLink>
                    <NavLink to="/about" className="inline-flex items-center py-1 px-3 my-6 rounded text-black-100 hover:text-white" activeClassName="text-white">About</NavLink>
                    <NavLink to="/project" className="inline-flex items-center py-1 px-3 my-6 rounded text-white-900 hover:text-white" activeClassName="text-white">Projects</NavLink>
                    <NavLink to="/post" className="inline-flex items-center py-1 px-3 my-6 rounded text-white-900 hover:text-white" activeClassName="text-white">Blog</NavLink>
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