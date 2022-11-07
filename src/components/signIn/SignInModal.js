import React, { useState } from "react"
import axios from "axios"
import User from "../../img/acceso.png"
import Modal from "react-bootstrap/Modal";
import ModalFooter from "react-bootstrap/ModalFooter";
import SingInGoogle from "../SingInGoogle"
import SingUpGoogle from "../SingUpGoogle"
import Nav from 'react-bootstrap/Nav';
import "./SignInModal.css"

export default function SignInModal() {


    const [modalState, setModalState] = useState("close");
    const handleShowModalSignIn = () => {
        setModalState("modalSignIn")
    }

    const handleShowModalSignUp = () => {
        setModalState("modalSignUp")
    }

    const handleClose = () => {
        setModalState("close")
    }



    return (
        <>
            <Nav.Item>
                <Nav.Link>

                    <img onClick={handleShowModalSignIn} className='HeaderUserIcon' src={User} />
                </Nav.Link>
            </Nav.Item>

            <Modal show={modalState === "modalSignIn"} onHide={handleClose}>
                <Modal.Header closeButton id="ModalHeader">
                    <Modal.Title id="ModalHeaderTitle">SignIn</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
                <ModalFooter>
                    <div className="UserModalFooterContainer">
                        <h3 className="UserModalFooterTitle">Connect with Social Networks</h3>
                        <div className="UserModalFooterNetworksContainer">
                            <SingInGoogle />
                        </div>
                    </div>
                </ModalFooter>
            </Modal>

            <Modal show={modalState === "modalSignUp"} onHide={handleClose}>
                <Modal.Header closeButton id="ModalHeader">
                    <Modal.Title id="ModalHeaderTitle">SignUp</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                </Modal.Body>
                <ModalFooter>
                    <div className="UserModalFooterContainer">
                        <h3 className="UserModalFooterTitle">Connect with Social Networks</h3>
                        <div className="UserModalFooterNetworksContainer">
                            <SingUpGoogle />
                        </div>
                    </div>
                </ModalFooter>
            </Modal>

        </>
    );
}