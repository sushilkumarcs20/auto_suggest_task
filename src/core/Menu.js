import { Link } from 'react-router-dom';
import logo from "./../assets/images/logo.png"
import "./../assets/css/menu.css";

const Menu = (props) => {
    return (
        < nav className="navbar navbar-expand-lg navbar-custom navbar-dark theme-bg " role="navigation">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={logo} alt="logo" className="logo" /></Link>
                <div class="input-group search-bar">
                    <div className="searchInputNeighbor d-flex">
                        <div style={{padding: "10px"}}>
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="pincodeInputParent" style={{paddingRight: "10px"}}>
                            <label htmlFor="pincodeInput">Delivering to</label> <br />
                            <input type="number" name="pincode" id="pincodeInput" className="pincodeInput" defaultValue="110001"/>
                        </div>
                    </div>
                    <div class="form-outline">
                        <input id="searchInput" type="search" class="form-control" placeholder="Search for medicine & wellness products" />
                    </div>
                    <div className="searchInputNeighbor">
                        <button type="button" class="btn btn-search-bar">
                            <i className="fas fa-search theme-color"></i>
                        </button>
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="#"><strong>UPLOAD</strong><span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item mx-3 checkoutCartIconParent">
                            <Link className="nav-link" to="#">
                                <i className="fas fa-shopping-cart"></i>
                                <span className="cartItemCount"></span>
                            </Link>
                        </li>
                        <li className="nav-item profile">
                            <Link className="nav-link" to="#">
                                <i className="fas fa-user"></i>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menu;