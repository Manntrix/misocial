import Image from 'next/image';
import { IoLocationOutline } from 'react-icons/io5'
import { BiCalendar } from 'react-icons/bi'
import myeventImage from '../../../public/images/myeventImage.jpg';
import { Nav, Tab } from "react-bootstrap";
import ShowTicketTable from './ShowTicketTable';


export default function AllEventsForm() {
    return (
        <>
            <div className="myevents-list">
                <Tab.Container defaultActiveKey="showtickets">
                    <div className="content-inner">

                        <Image className="image-part"
                            src={myeventImage}
                            alt="events images"
                        />

                        <div className="content-part">
                            <h2 className="m-header">Bunbury Toastmaster- Regular  Club Meeting</h2>
                            <div className="sub-title capitalized">
                                <BiCalendar /> SUN, APR 25 - MON, APR 26  6.30PM - 8.30PM</div>
                            <div className="sub-title">
                                <IoLocationOutline /> Australia, AU, Aplus club</div>
                            <div className="save-cancel-action">
                                <button className="btn btn-next">Cancel & unpublish</button>
                                <button className="btn btn-cancel">Unpublish</button>
                            </div>
                        </div>
                    </div>
                    <div className="save-cancel-action">

                        <Nav variant="pills">

                            <Nav.Item>
                                <Nav.Link eventKey="edit">Edit</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="preview">Preview</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="invite">Invite</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="copyURL">Copy URL</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="copyEvent">Copy Event</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Transactions">Transactions</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="sendemail">Send Email</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="viewemails">View Emails</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="viewattendees">View Attendees</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="download-attendees">Download Attendees</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="showtickets">Show Tickets</Nav.Link>
                            </Nav.Item>

                        </Nav>
                    </div>
                    <div className="inner-form-part">
                        <Tab.Content>
                            <Tab.Pane eventKey="edit">
                                <h5>edit</h5>
                            </Tab.Pane>
                            <Tab.Pane eventKey="preview">
                                preview
                            </Tab.Pane>

                            <Tab.Pane eventKey="invite">
                                invite
                            </Tab.Pane>
                            <Tab.Pane eventKey="copyURL">
                                copyURL
                            </Tab.Pane>
                            <Tab.Pane eventKey="copyEvent">
                                Copy Event
                            </Tab.Pane>
                            <Tab.Pane eventKey="Transactions">
                                Transactions
                            </Tab.Pane>
                            <Tab.Pane eventKey="sendemail">
                                Send email
                            </Tab.Pane>
                            <Tab.Pane eventKey="viewemails">
                                view emails
                            </Tab.Pane>
                            <Tab.Pane eventKey="viewattendees">
                                view-attendees
                            </Tab.Pane>
                            <Tab.Pane eventKey="download-attendees">
                                download attendees
                            </Tab.Pane>
                            <Tab.Pane eventKey="showtickets">
                                <ShowTicketTable />
                            </Tab.Pane>

                        </Tab.Content>
                    </div>
                </Tab.Container>
            </div>
            <div className="myevents-list">
                <Tab.Container defaultActiveKey="showtickets">
                    <div className="content-inner">

                        <Image className="image-part"
                            src={myeventImage}
                            alt="events images"
                        />

                        <div className="content-part">
                            <h2 className="m-header">Bunbury Toastmaster- Regular  Club Meeting</h2>
                            <div className="sub-title capitalized">
                                <BiCalendar /> SUN, APR 25 - MON, APR 26  6.30PM - 8.30PM</div>
                            <div className="sub-title">
                                <IoLocationOutline /> Australia, AU, Aplus club</div>
                            <div className="save-cancel-action">
                                <button className="btn btn-next">Cancel & unpublish</button>
                                <button className="btn btn-cancel">Unpublish</button>
                            </div>
                        </div>
                    </div>
                    <div className="save-cancel-action">

                        <Nav variant="pills">

                            <Nav.Item>
                                <Nav.Link eventKey="edit">Edit</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="preview">Preview</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="invite">Invite</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="copyURL">Copy URL</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="copyEvent">Copy Event</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Transactions">Transactions</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="sendemail">Send Email</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="viewemails">View Emails</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="viewattendees">View Attendees</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="download-attendees">Download Attendees</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="showtickets">Show Tickets</Nav.Link>
                            </Nav.Item>

                        </Nav>
                    </div>
                    <div className="inner-form-part">
                        <Tab.Content>
                            <Tab.Pane eventKey="edit">
                                <h5>edit</h5>
                            </Tab.Pane>
                            <Tab.Pane eventKey="preview">
                                preview
                            </Tab.Pane>

                            <Tab.Pane eventKey="invite">
                                invite
                            </Tab.Pane>
                            <Tab.Pane eventKey="copyURL">
                                copyURL
                            </Tab.Pane>
                            <Tab.Pane eventKey="copyEvent">
                                Copy Event
                            </Tab.Pane>
                            <Tab.Pane eventKey="Transactions">
                                Transactions
                            </Tab.Pane>
                            <Tab.Pane eventKey="sendemail">
                                Send email
                            </Tab.Pane>
                            <Tab.Pane eventKey="viewemails">
                                view emails
                            </Tab.Pane>
                            <Tab.Pane eventKey="viewattendees">
                                view-attendees
                            </Tab.Pane>
                            <Tab.Pane eventKey="download-attendees">
                                download attendees
                            </Tab.Pane>
                            <Tab.Pane eventKey="showtickets">
                                <ShowTicketTable />
                            </Tab.Pane>

                        </Tab.Content>
                    </div>
                </Tab.Container>
            </div>

        </>
    )
}