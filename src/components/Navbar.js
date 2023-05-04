import cflogo from '../public/cflogo.png';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { Form, Nav, Navbar, Button, Dropdown } from 'react-bootstrap';
import './NavBar.css';

const NavBar = ({ web3Handler, account }) => {

    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="navbar-body">
            <Navbar variant="dark" className="navbar" fixed="top" expand="lg">
                <Navbar.Brand as={Link} to="/">
                    <img src={cflogo} alt="" className="cflogo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Form>
                        <input type="search" placeholder="Search" variant="dark" className="search" />
                    </Form>
                    <Nav>
                        <Nav.Link as={Link} to="/history" className="nav">History</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/auctionProduct" className="productnav">Auction Product</Nav.Link>
                        <Nav.Link as={Link} to="/sellProduct" className="productnav">Sell Product</Nav.Link>
                        {account ? (
                            <Dropdown onMouseLeave={() => setShowDropdown(false)} onMouseOver={() => setShowDropdown(true)}>
                                <Dropdown.Toggle className="walletnav" style={{ width: '100%', height: '40px' }} id="dropdown-basic">
                                    My Account
                                </Dropdown.Toggle>
                                <Dropdown.Menu show={showDropdown}>
                                    <Dropdown.Item style={{ fontWeight: "bold" }}>{account.slice(0, 6) + '...' + account.slice(37, 42)}</Dropdown.Item>
                                    <Dropdown.Item href="#">Settings</Dropdown.Item>
                                    <Dropdown.Item href="#">Feedback</Dropdown.Item>
                                    <Dropdown.Item href="#">Contact Us</Dropdown.Item>
                                    <Dropdown.Item href="/" target="_self" to="/" style={{ color: "#DD3546" }}>Log Out</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        ) : (
                            <Button onClick={web3Handler} className="walletnav">Connect Wallet</Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;