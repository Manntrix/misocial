import { Form, FormControl } from "react-bootstrap";

export default function HowItWorks() {
    return (
        <div className="How-itworks-wrapper">
            <div className="container">
                <h2 className="title"> Here’s How it works?</h2>
                <p className="subtitle">Our innovative events platform enables members worldwide to discover, create, share and register for events</p>

                <div className="process-part">
                    <div className="process-content">

                        <div className="item-content">
                            <div className="numberBox">
                                <div className="number-part">
                                    1
                                </div>
                            </div>
                            <h6>Signup</h6>
                            <p>Create a profile in seconds.
                                It's free!</p>
                        </div>
                        <div className="item-content">
                            <div className="numberBox">
                                <div className="number-part">
                                    2
                                </div>
                            </div>
                            <h6>Discover Events</h6>
                            <p>Accept invites or
                                Search events near you.</p>
                        </div>
                        <div className="item-content">
                            <div className="numberBox">
                                <div className="number-part">
                                    3
                                </div>
                            </div>
                            <h6>Create Events</h6>
                            <p>Apply to be an event organizer
Power your events with MiSocial</p>
                        </div>
                    </div>
                </div>
                <Form className="d-flex search-box">
                    <FormControl
                        type="search"
                        placeholder="Enter your email id"
                        className="mr-2"
                        aria-label="Search"
                    />
                    <button className="btn btn-join-now">Join Now</button>
                </Form>
            </div>
        </div>
    )
}