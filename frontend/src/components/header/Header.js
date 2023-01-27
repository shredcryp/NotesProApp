import React from "react"
import { NavLink } from "react-router-dom"
import "./Header.css"

function Header() {
    return (
        <nav>
            <div className="nav-left">
                <NavLink to='/' className="nav-name" >Note Zipper</NavLink>
            </div>
            <div className="nav-right">
                <div className="search-form">
                    <form>
                        <input type="text" placeholder="Search..." />
                    </form>
                </div>
                <NavLink className="nav-button" to="/mynotes">MyNotes</NavLink>
                <NavLink className="nav-button" to="">Shred</NavLink>
                <NavLink className="nav-button" to="">Logout</NavLink>
            </div>
        </nav>
    )
}
export default Header