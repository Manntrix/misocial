import { Form } from "react-bootstrap";

export default function NewPasswordForm() {
    return (
        <div className="forget-form-wrapper">
            <div className="stepfrm-inner">
                <h2 className="header">New Password</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>New password</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Re-enter New Password</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                    <ul className="password-hints">
                        <li>Minimum 8 characters.</li>
                        <li>Include at least one lowercase character (a-z)</li>
                        <li>Include at least one uppercase character (A-Z)</li>
                        <li>Include at least one numeric character (0-9)</li>
                    </ul>

                    <button className="btn btn-next">Save Password</button>

                </Form>
            </div>
        </div>
    )
}