import { useRef, useState } from "react";
import { Form, Nav, Navbar, Button } from "react-bootstrap";
import logo from "./../assets/images/logo.png"
import "./../assets/css/menu.css";
import { searchData } from './helper/medicineData';
import { useCart, useMedicine } from './helper/store';

const Menu = (props) => {
    const { cartState } = useCart();
    const { medicineDispatch } = useMedicine();

    const searchInput = useRef(null);

    const [result, setResult] = useState([]);
    const [listView, setListView] = useState(false);

    const inputHandler = ({ target }) => {
        if (target.value === '') {
            return;
        }

        let responseData = searchData(target.value);
        setResult(responseData);
    }

    return (
        <Navbar expand="lg" className="navbar-custom navbar-dark theme-bg container-fluid" role="navigation">
            <Navbar.Brand href="/"><img src={logo} alt="logo" className="logo" /></Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Collapse id="navbarScroll">
                <div className="input-group search-bar">
                    <div className="search-input-neighbor d-flex">
                        <div style={{ padding: "10px" }}>
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="pincode-input-parent" style={{ paddingRight: "10px" }}>
                            <label htmlFor="pincode-input">Delivering to</label> <br />
                            <input type="number" name="pincode" id="pincode-input" className="pincode-input" defaultValue="110001" />
                        </div>
                    </div>
                    <Form className="d-flex">
                        <Form.Control
                            onFocus={(e) => { setListView(true); inputHandler(e); }}
                            onKeyUp={(e) => { inputHandler(e); }}
                            onBlur={() => setListView(false)} ref={searchInput}
                            id="search-input"
                            type="search"
                            className="form-control"
                            placeholder="Search for medicine & wellness products"
                        />
                        {result.length > 0 && searchInput.current.value && listView &&
                            <div className="dropdown-menu suggestions" aria-labelledby="search-input">
                                <div>
                                    {
                                        result.map((value, index) => {
                                            return <div onMouseOver={() => searchInput.current.value = value} key={index}>{value}</div>
                                        })
                                    }
                                </div>
                            </div>
                        }
                    </Form>
                    <div className="search-input-neighbor">
                        <Button variant="" onClick={() => { medicineDispatch({ type: "getMatchedItems", term: searchInput.current.value }) }}>
                            <i className="fas fa-search theme-color"></i>
                        </Button>
                    </div>
                </div>
                <Nav
                    className="mr-auto my-2 my-lg-0"
                >
                    <Nav.Link href="#"><strong>UPLOAD</strong></Nav.Link>
                    <Nav.Link href="#" className="mx-3 checkout-cart-icon-parent">
                        <i className="fas fa-shopping-cart"></i>
                        <span className="cart-item-count">{parseInt(cartState.count)}</span>
                    </Nav.Link>
                    <Nav.Link href="#" className="profile">
                        <i className="fas fa-user"></i>
                    </Nav.Link>
                    <Nav.Link href="#">Login</Nav.Link>
                    <Nav.Link href="#">Register</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Menu;