import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Register() {
    const formStyle = {
        backgroundColor: "#0F3460",
        alignItems: "center",
        padding: "30px",
        marginTop: "45px",
        borderRadius: "10px",
        boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)"
    }

  return (
    <div>
    <Container>
      <Row className="d-flex justify-content-center align-items-center">
        <Col sm="6" >
          <Form style={formStyle}>
            <h1 style={{color: '#ffffff'}}>Registration</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{color: '#ffffff'}}>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{color: '#ffffff'}}>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{color: '#ffffff'}}>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Register;
