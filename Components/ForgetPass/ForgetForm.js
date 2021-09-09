import { Form } from "react-bootstrap";

export default function ForgetForm() {
    return (
        <div className="forget-form-wrapper">
            <div className="stepfrm-inner">
                <h2 className="header">Forgot Password</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Enter your email to reset your password</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>

                    <button className="btn btn-next">Reset Password</button>
                    <div className="form-values">  <p className="text">
                        You may need to check your spam folder and ensure emails from <span>no-reply@misocial.net</span> are not blocked.</p></div>
                </Form>
            </div>
        </div>
    )
}