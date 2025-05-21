import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Card, Container, Row, Alert, Spinner } from "react-bootstrap";

import { addToCart } from "@rtk/cart/cartSlice.js";
import { actGetProducts } from "@rtk/products/act/actGetProducts";

const Products = () => {
  const { products, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [addedProductId, setAddedProductId] = useState(null);

  useEffect(() => {
    dispatch(actGetProducts());
  }, [dispatch]);

  // Handle loading state
  if (loading) {
    return (
      <Container className="text-center py-5 mt-5">
        <Spinner animation="border" variant="primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <h4 className="mt-3">Loading products...</h4>
      </Container>
    );
  }

  // Handle error state
  if (error) {
    return (
      <Container className="text-center py-5 mt-5">
        <Alert variant="danger">
          <h4>Error</h4>
          <p>{error.message || "Failed to load products. Please try again."}</p>
          <Button variant="primary" onClick={() => dispatch(actGetProducts())}>
            Retry
          </Button>
        </Alert>
      </Container>
    );
  }

  // Render products when no loading or error
  return (
    <Container>
      <h2 className="py-5 mt-4">Products</h2>
      <Row>
        {products.length === 0 ? (
          <Alert variant="info" className="w-100">
            No products available.
          </Alert>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            >
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.title}
                  style={{ height: "160px", objectFit: "contain" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title style={{ height: "25px", overflow: "hidden" }}>
                    {product.title}
                  </Card.Title>
                  <Card.Text
                    style={{ height: "120px", overflow: "hidden" }}
                    className="flex-grow-1"
                  >
                    {product.description}
                  </Card.Text>
                  <Card.Text>${product.price.toFixed(2)}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => {
                      dispatch(addToCart(product));
                      setAddedProductId(product.id);
                      setTimeout(() => setAddedProductId(null), 2000);
                    }}
                  >
                    Add to Cart
                  </Button>
                  {addedProductId === product.id && (
                    <p
                      className="text-success mt-2"
                      style={{ fontSize: "0.9rem" }}
                    >
                      Added to cart!
                    </p>
                  )}
                </Card.Body>
              </Card>
            </div>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Products;
