import { Link } from "react-router-dom";

import { Container, Button } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="text-center mt-5">
      <h1 style={{ fontSize: "6rem", fontWeight: "bold" }}>404</h1>
      <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
        The page you are looking for does not exist.
      </p>
      <Button variant="primary" as={Link} to="/">
        Back to Home
      </Button>
    </Container>
  );
};

export default NotFound;
