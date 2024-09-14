import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Navbar.css";

const Navbar = () => {
    const form = useSelector((state) => state.form);

    return (
        <nav className="Navbar">
            <ul className="Navbar-page">
                <li>
                    <Link className="navbar-a" to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="navbar-a" to="/product">
                        Product
                    </Link>
                </li>
                <li>
                    <Link className="navbar-a" to="/forms">
                        Forms
                    </Link>
                </li>
                <li>
                    <Link className="navbar-a" to="/dictionary">
                        Dictionary
                    </Link>
                </li>
            </ul>
            <ul className="Navbar-info">
                <p>
                    Bienvenido <span>{form.formData.username}</span>:{" "}
                    <span>{form.formData.email}</span>
                </p>
            </ul>
        </nav>
    );
};

export { Navbar };
