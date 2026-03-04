import "../css/NavBar.css"

function NavBar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <h3>Movie Finder</h3>
            </div>
            <div className="nav-links">
                <ul>
                    <li>Home</li>
                    <li>Favorites</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar