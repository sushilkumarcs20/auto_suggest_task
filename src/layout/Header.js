import { Link } from 'react-router-dom';
import Menu from '../core/Menu';
import "./../assets/css/header.css";
import medicineIcon from "./../assets/images/medicine.png";
import diagnosticIcon from "./../assets/images/diagnostic.png";
import wellnessIcon from "./../assets/images/wellness.png";
import healthCornerIcon from "./../assets/images/health-corner.png";

const Header = () => {
    return (
        <header className="fixed-top">
            <Menu />
            <div className="theme-bg extended-header">
                <div className="container-fluid">
                    <ul className="me-auto mb-2 mb-lg-0 d-flex">
                        <li>
                            <Link className="nav-link" to="#">
                                <div className="d-flex">
                                    <div className="extended-header-icons">
                                        <img src={medicineIcon} alt="" />
                                    </div>
                                    <div className="extended-header-text">
                                        <strong>Medicine</strong>
                                        <div>Over 25000 products</div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="#">
                                <div className="d-flex">
                                    <div className="extended-header-icons">
                                        <img src={wellnessIcon} alt="" />
                                    </div>
                                    <div className="extended-header-text">
                                        <strong>Wellness</strong>
                                        <div>Health products</div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="#">
                                <div className="d-flex">
                                    <div className="extended-header-icons">
                                        <img src={diagnosticIcon} alt="" />
                                    </div>
                                    <div className="extended-header-text">
                                        <strong>Diagnostic</strong>
                                        <div>Book tests & checkups</div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="#">
                                <div className="d-flex">
                                    <div className="extended-header-icons">
                                        <img src={healthCornerIcon} alt="" />
                                    </div>
                                    <div className="extended-header-text">
                                        <strong>Health Corner</strong>
                                        <div>Treding tips from health experts</div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;