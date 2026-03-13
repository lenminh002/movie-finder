import { Link } from "react-router-dom"
import "../css/NavBar.css"

function NavBar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <h3>Movie Finder</h3>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search" />
            </div>
            <div className="nav-links">
                <ul>
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/favorites" className="nav-link">Favorites</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar