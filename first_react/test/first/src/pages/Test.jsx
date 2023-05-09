import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

function Login() {
  const formStyle = {
    backgroundColor: "#0F3460",
    alignItems: "center",
    padding: "30px",
    marginTop: "80px",
    borderRadius: "10px",
    boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
  };

  const fields = [
    { label: "Email Address", type: "text", placeholder: "Input Email" },
    { label: "Password", type: "password", placeholder: "Password" },
  ];
  const [emailAdd, setEmailAdd] = useState("Kyle");
  const [password, setPassword] = useState("Kyle");

  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col sm="6">
            <Form style={formStyle}>
              {fields.map((field) => {
                return (
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ color: "#ffffff" }}>
                      {field.label}
                    </Form.Label>
                    <Form.Control
                      type={field.type}
                      placeholder={field.placeholder}
                      onChange={(e) => {
                        if (field.label === "Email Address") {
                          setEmailAdd(e.target.value);
                        } else if (field.label === "Password")
                          setPassword(e.target.value);
                      }}
                    />
                  </Form.Group>
                );
              })}

              <Button variant="primary" type="submit">
                Submit
              </Button>
              <br />
              <h2 style={{ color: "#ffffff" }}>Hi {emailAdd}</h2>
              <h2 style={{ color: "#ffffff" }}>
                This is your password: {password}
              </h2>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
