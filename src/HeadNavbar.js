import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

export class HeadNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home" className="Logotext">
              <img
                alt=""
                src="logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Cloud Contact &nbsp;
              <Button variant="primary" size="sm">
                &nbsp;Home&nbsp;
              </Button>{" "}
              &nbsp;
              <Button variant="primary" size="sm">
                &nbsp;Contact&nbsp;
              </Button>{" "}
              &nbsp;
              <Button variant="primary" size="sm">
                &nbsp;About&nbsp;
              </Button>{" "}
              &nbsp;
            </Navbar.Brand>
            <span className="ProfilePics">
              <Image
                alt=""
                src="76efb9495d394564fd5aa8466c397ff3.jpg"
                width="40"
                height="40"
                className="d-inline-block align-top"
                roundedCircle
              />{" "}
            </span>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default HeadNavbar;
