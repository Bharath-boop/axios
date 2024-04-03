import React, { useState } from "react";
import NavBar from "./NavBar";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { API_URL } from "../App";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Datacard from "../Common/Datacard";

function Create() {
  let [firstname, setFirstname] = useState("");
  let [lastname, setLastname] = useState("");
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [address, setAddress] = useState("");
  let [website, setWebsite] = useState("");
  let [company, setCompany] = useState("");

  let navigate = useNavigate();

  const handleCreate = async () => {
    try {
      let data = {
        firstname,
        lastname,
        username,
        email,
        mobile,
        address,
        website,
        company,
      };
      let res = await axios.post(API_URL, data);
      if (res.status === 201) {
        toast.success("Data Added Sucessful"), navigate("/dashboard");
      }
    } catch (error) {
      toast.error("Internal server Error");
    }
  };
  return (
    <div className="container ">
      <NavBar />
        <Form className="p-3" style={{ border: "1px solid black" }}>
          <Row className="mb-3">
            <Col>
              <Form.Label>Frist-name</Form.Label>
              <Form.Control
                placeholder="First name"
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
                required
              />
            </Col>
            <Col>
              <Form.Label>Last-name</Form.Label>
              <Form.Control
                placeholder="Last name"
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
                required
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Label>User-name</Form.Label>
            <Form.Control
              placeholder="User name"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
            />
          </Row>

          <Row className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="123-45-678"
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
                required
              />
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              required
            />
          </Form.Group>

          <Row className="mb-3">
            <Col>
              <Form.Label>Website</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the website link"
                onChange={(e) => {
                  setWebsite(e.target.value);
                }}
                required
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              placeholder="Company Name"
              onChange={(e) => {
                setCompany(e.target.value);
              }}
              required
            />
          </Row>

          <Button
            variant="primary"
            onClick={() => {
              handleCreate();
            }}
          >
            Submit
          </Button>
        </Form>
      <div className="previewWrapper" style={{ border: "1px solid black" }}>
        <h1>Preview</h1>
        <Datacard
          username={username}
          email={email}
          mobile={mobile}
          address={address}
          website={website}
          company={company}
        />
      </div>
    </div>
  );
}

export default Create;
