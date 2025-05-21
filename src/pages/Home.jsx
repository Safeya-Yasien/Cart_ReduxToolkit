import { Link } from "react-router-dom";

import { Container, Button } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="text-center py-5 mt-5">
      <h1 className="mb-4">Welcome to Our Store</h1>
      <p className="mb-4">
        Discover the best products at unbeatable prices. Browse our collection
        and find what fits your vibe.
      </p>
      <Link to="/products">
        <Button variant="primary" size="lg">
          Shop Now
        </Button>
      </Link>
    </Container>
  );
};

export default Home;
