import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { API_URL } from "../App";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Datacard from "../Common/Datacard";

function Edit() {
  let {id}=useParams();

  let [firstname, setFirstname] = useState("");
  let [lastname, setLastname] = useState("");
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [address, setAddress] = useState("");
  let [website, setWebsite] = useState("");
  let [company, setCompany] = useState("");

  let navigate = useNavigate();

  const handleEdit = async () => {
    try {
      let name = firstname + lastname;
      let data = {
        name,
        username,
        email,
        mobile,
        address,
        website,
        company,
      };
      let res = await axios.put(`${API_URL}/${id}`,data);
      if (res.status === 200) {
        toast.success("Data Edited Sucessfull"), navigate("/dashboard");
      }
    } catch (error) {
      toast.error("Internal server Error");
    }
  };

  const getUserById=async()=>{
    try {
      let res=await axios.get(`${API_URL}/${id}`)
      if(res.status===200){
        // console.log(res.data);
        setFirstname(res.data.firstname)
        setLastname(res.data.lastname)
        setUsername(res.data.username)
        setEmail(res.data.email)
        setMobile(res.data.mobile)
        setAddress(res.data.address)
        setWebsite(res.data.website)
        setCompany(res.data.company)
      }
    } catch (error) {
      toast.error('Internal server Error')
    }
  }

  useEffect(()=>{
    getUserById()
  },[])

  return (
    <div className="container">
      <NavBar />
      <Form className="p-3" style={{border:"1px solid black"}}>
        <Row className="mb-3">
          <Col>
            <Form.Label>Frist-name</Form.Label>
            <Form.Control
              placeholder="First name" value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              required
            />
          </Col>
          <Col>
            <Form.Label>Last-name</Form.Label>
            <Form.Control
              placeholder="Last name" value={lastname}
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
            placeholder="User name" value={username}
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
            placeholder="Enter email" value={email}
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
              placeholder="123-45-678" value={mobile}
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
            placeholder="1234 Main St" value={address}
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
              placeholder="Enter the website link" value={website}
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
            placeholder="Company Name" value={company}
            onChange={(e) => {
              setCompany(e.target.value);
            }}
            required
          />
        </Row>

        <Button
          variant="primary"
          onClick={() => {
            handleEdit();
          }}
        >
          Submit
        </Button>
      </Form>
      <div className="previewWrapper" style={{border:"1px solid black"}}>
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

export default Edit;
