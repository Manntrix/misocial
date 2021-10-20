import Image from "next/image";
import { Form, Modal } from "react-bootstrap";
import successTick from '../../public/images/successTick.png';
import Link from 'next/link';
import { useState } from "react";


export default function ForgetForm() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <>
            <div className="forget-form-wrapper">
                <div className="stepfrm-inner">
                    <h2 className="header">Forgot Password</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Enter your email to reset your password</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>

                        <button className="btn btn-next" onClick={handleShow} type="button">Reset Password</button>
                        <div className="form-values">  <p className="text">
                            You may need to check your spam folder and ensure emails from <span>no-reply@misocial.net</span> are not blocked.</p></div>
                    </Form>
                </div>
            </div>


            <Modal show={show} onHide={handleClose} className="universalModal ">
                <Modal.Header closeButton>

                </Modal.Header>
                <Modal.Body>
                    <div className="successReset-modal">
                        <div className="text-center">
                            <Image
                                src={successTick}
                                alt="successTick"

                            />
                            <Modal.Title>Password updated</Modal.Title>
                            <p className="success-text">
                                You have successfully changed your password.
                                You can   <Link href="/login"><a className="login-now">Login</a></Link> now.
                            </p>
                        </div>
                    </div>
                </Modal.Body>

            </Modal>
        </>
    )
}