import { Link } from "react-router-dom";
import "../styles/style.css"

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="logo">I&hearts;Books</div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/store">Store</Link>
                <Link to="/my-books">My books</Link>
                <Link to="/bucket">Bucket</Link>
            </nav>
        </div>
    )
}

export default Navigation;