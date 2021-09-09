import Image from "next/image";
import { Button, Form } from "react-bootstrap";
import recaptcha from "../../public/images/recaptcha.png"

export default function FormSection() {
    return (
        <div className="step-one-form">
            <div className="stepfrm-inner">
                <h2 className="header">Join now</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Enter your email</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Create Password</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>

                    <div className="captcha">
                        <div className="cap-text">
                            <input id="name" type="checkbox" />
                            <label htmlFor="name">I’m not a robot</label>
                        </div>
                        <button className="btn btn-recaptcha">
                            <Image
                                src={recaptcha}
                                alt="recaptcha"
                            />
                        </button>
                    </div>
                    <div className="form-values">
                        <label className="toggleSwitch" >
                            <input type="checkbox" defaultChecked />
                            <span>
                                <span>NO</span>
                                <span>YES</span>
                            </span>
                            <a>

                            </a>
                        </label>
                        <p className="text"> I have read and agree to the <span>Terms & Conditions and Privacy Policy</span></p>
                    </div>
                    <div className="form-values">
                        <label className="toggleSwitch" >
                            <input type="checkbox" />
                            <span>
                                <span>NO</span>
                                <span>YES</span>
                            </span>
                            <a>

                            </a>
                        </label>
                        <p className="text"> I want   receive MiSocial news, offers and promotions</p>
                    </div>

                    <button className="btn btn-next">Next</button>
                </Form>
                <p className="members-already">Already a Member?<a href=""> Login Now</a></p>
            </div>

        </div>
    )
}