import { Link } from 'react-router-dom';
import medicineIcon from "./../assets/images/medicine.png";
import diagnosticIcon from "./../assets/images/diagnostic.png";
import wellnessIcon from "./../assets/images/wellness.png";
import healthCornerIcon from "./../assets/images/health-corner.png";
import { Col, Row } from 'react-bootstrap';

function ExtraNavbar(props) {
    return (
        <div className="extra-navbar">
            <div className="theme-bg">
                <div className="container">
                    <Row>
                        <Col sm>
                            <Link className="nav-link" to="#">
                                <div className="d-flex">
                                    <div className="extra-navbar-icons">
                                        <img src={medicineIcon} alt="" />
                                    </div>
                                    <div className="extra-navbar-text">
                                        <strong>Medicine</strong>
                                        <div>Over 25000 products</div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col sm>
                            <Link className="nav-link" to="#">
                                <div className="d-flex">
                                    <div className="extra-navbar-icons">
                                        <img src={wellnessIcon} alt="" />
                                    </div>
                                    <div className="extra-navbar-text">
                                        <strong>Wellness</strong>
                                        <div>Health products</div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col sm>
                            <Link className="nav-link" to="#">
                                <div className="d-flex">
                                    <div className="extra-navbar-icons">
                                        <img src={diagnosticIcon} alt="" />
                                    </div>
                                    <div className="extra-navbar-text">
                                        <strong>Diagnostic</strong>
                                        <div>Book tests & checkups</div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col sm>
                            <Link className="nav-link" to="#">
                                <div className="d-flex">
                                    <div className="extra-navbar-icons">
                                        <img src={healthCornerIcon} alt="" />
                                    </div>
                                    <div className="extra-navbar-text">
                                        <strong>Health Corner</strong>
                                        <div>Treding tips from health experts</div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    </Row >
                </div>
            </div>
            <div className="extra-nav">
                <div className="container">
                    <Row>
                        <Col sm>
                            <Link className="nav-link" to="#">
                                COVID Essentials
                            </Link>
                        </Col>
                        <Col sm>
                            <Link className="nav-link" to="#">
                                Diabetes
                            </Link>
                        </Col>
                        <Col sm>
                            <Link className="nav-link" to="#">
                                Eyewear
                            </Link>
                        </Col>
                        <Col sm>
                            <Link className="nav-link" to="#">
                                Ayush
                            </Link>
                        </Col>
                        <Col sm>
                            <Link className="nav-link" to="#">
                                Fitness
                            </Link>
                        </Col>
                        <Col sm>
                            <Link className="nav-link" to="#">
                                Personal Care
                            </Link>
                        </Col>
                        <Col sm>
                            <Link className="nav-link" to="#">
                                Mom & Baby
                            </Link>
                        </Col>
                        <Col sm>
                            <Link className="nav-link" to="#">
                                Devices
                            </Link>
                        </Col>
                        <Col sm>
                            <Link className="nav-link" to="#">
                                Surgicals
                            </Link>
                        </Col>
                        <Col sm>
                            <Link className="nav-link" to="#">
                                Sexual Wellness
                            </Link>
                        </Col>
                        <Col sm>
                            <Link className="nav-link" to="#">
                                Treatments
                            </Link>
                        </Col>
                    </Row>
                </div>
            </div>
        </div >
    )
}

export default ExtraNavbar
