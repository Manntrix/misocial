import { Form } from "react-bootstrap";
import { IoRefresh } from 'react-icons/io5';

export default function MySettings() {
    return (
        <>
            <Form className="form-class">
                <Form.Label className="section-name">My Settings</Form.Label>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Login Email</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                    <Form.Label>Customer ID</Form.Label>
                    <Form.Control type="text" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Date Joined</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>



                <div className="check-radio-wrap">
                    <div className="form-label">Membership Status</div>
                    <div className="gender-part">
                        <label className="cs-wrapper">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                            <p className="label-text">Basic</p>
                        </label>
                        <label className="cs-wrapper">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <p className="label-text">Platinum</p>
                        </label>
                    </div>
                </div>

                <button className="btn btn-next">Upgrade to platinum</button>
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
                    <p className="text"> I want to receive MiSocial news, offers & promotions</p>
                </div>
                <div className="save-cancel-action">
                    <button className="btn btn-next">Save</button>
                    <button className="btn btn-cancel">Cancel</button>
                    <button className="btn btn-reset"><IoRefresh />Reset</button>
                </div>
            </Form>
        </>
    )
}