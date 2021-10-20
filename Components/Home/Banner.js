import { Button, Form, FormControl } from "react-bootstrap";
import Header from "../../Layouts/Header"

const Banner = () => (
  <>
    <div className="top-banner">
      <div className="banner-container">
        <Header />

        <div className="banner-content-wrap">
          <h2> The Events Platform <br /> That Connects </h2>
          <p>
            Professionals & Entrepreneurs through Live Experiences  <br />
            And<br />
            An Event Organizer&apos;s  Passion For Events With Members
          </p>

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
    </div>
  </>
)
export default Banner;