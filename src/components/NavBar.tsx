import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

import "../css/NavBar.css"

function NavBar() {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = async (e: any) => {

        // Prevent reload the page by default, which wipes out the search logic runs.
        e.preventDefault();
        if (!searchQuery.trim()) {
            navigate("/");
            return;
        }
        navigate(`/?q=${encodeURIComponent(searchQuery.trim())}`);
    }




    return (
        <nav className="navbar">
            <div className="logo">
                <h3>Movie Finder</h3>
            </div>
            <div className="search-bar">
                <form onSubmit={handleSearch}>
                    <input type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} />
                </form>
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