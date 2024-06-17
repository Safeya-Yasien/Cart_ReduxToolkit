import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";

import { fetchProducts } from "../rtk/slices/products-slice";
import { addToCart } from "../rtk/slices/cart-slice.js";

const Products = () => {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Container>
      <h1 className="py-5 mt-4">Products</h1>
      <Row>
        {products.map((product) => {
          return (
            <div key={product.id} className="col mb-4">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.id}
                  style={{ height: "160px", objectFit: "contain" }}
                />
                <Card.Body>
                  <Card.Title style={{ height: "25px", overflow: "hidden" }}>
                    {product.title}
                  </Card.Title>
                  <Card.Text style={{ height: "120px", overflow: "hidden" }}>
                    {product.description}
                  </Card.Text>
                  <Card.Text>{product.price}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add Cart
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </Row>
    </Container>
  );
};

export default Products;
