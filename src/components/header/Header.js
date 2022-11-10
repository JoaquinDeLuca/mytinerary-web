import { Link as LinkRouter } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SignInModal from "../signIn/SignInModal";
import logo3 from "../../img/logo3.png";

import "../../styles/Header.css"


export default function Header() {
    return (

        <Navbar expand="sm" id="Navbar" >
            <Navbar.Brand >
                <Nav.Link className="text-white">
                    <LinkRouter to="/" className="text-white text-decoration-none">
                        <div className="HeaderLogoContainer">
                            <h3 className="HeaderLogo">MY TINERARY</h3>
                            <p className="HeaderSubLogo">Trips</p>
                        </div>
                        {/* MY TINERARY */}
                    </LinkRouter>
                </Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} className="bg-white" />
            <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-sm`}
                aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                placement="end"
            >
                <Offcanvas.Header closeButton fill>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                        <h3 className="HeaderLogo">MY TINERARY</h3>
                        <p className="HeaderSubLogo">Trips</p>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="HeaderBodyNav">
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Item>
                            <Nav.Link>
                                <LinkRouter to="/" className="text-white text-decoration-none fs-4">
                                    Home
                                </LinkRouter>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <LinkRouter to="/cities" className="text-white text-decoration-none fs-4">
                                    Cities
                                </LinkRouter>
                            </Nav.Link>
                        </Nav.Item>
                        <SignInModal />
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
    )
}