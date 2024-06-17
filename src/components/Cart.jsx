import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/Image";
import { clearCart, removeFromCart } from "../rtk/slices/cart-slice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalprice = cart.reduce((acc, product) => {
    return (acc += product.price * product.quantity);
  }, 0);

  return (
    <Container>
      <h1 className="py-5 mt-4">Cart</h1>
      <Button
        variant="danger"
        style={{ display: "flex", marginBottom: "30px", marginLeft: "auto" }}
        onClick={() => dispatch(clearCart())}
      >
        Clear cart
      </Button>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Title</th>
            <th>Imgae</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>
                  <Image
                    src={product.image}
                    lt={product.id}
                    style={{ height: "80px", objectFit: "contain" }}
                  ></Image>
                </td>
                <td>{product.quantity}</td>
                <td>{product.price} $</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(removeFromCart(product))}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <p>Total Price: {totalprice} $</p>
    </Container>
  );
};

export default Cart;
