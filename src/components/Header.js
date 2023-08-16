import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        {/* <img src={logo} alt="Logo" width="200" height="150" className="d-inline-block align-text-top" /> */}
                        MEETME
                    </Link>
                    <div className="collapse d-flex" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;