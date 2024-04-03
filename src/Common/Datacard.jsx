import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Datacard({ username, email, mobile, address, website, company }) {
  return (
    <div className="container p-3 d-flex" style={{ justifyContent: "center" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Img
            variant="top"
            src="data:image/jpeg;base64,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"
          />
          <Card.Text className="mt-2">
           NAME: {username}
          </Card.Text>
          <Card.Text>
            <>MOBILE:</> {mobile}
          </Card.Text>
          <Card.Text>
            <>EMAIL:</> {email}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <>ADDRESS:</> {address}
          </ListGroup.Item>
          <ListGroup.Item>
            <>WEBSITE:</> {website}
          </ListGroup.Item>
          <ListGroup.Item>
            <>COMPANY NAME:</> {company}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

export default Datacard;
