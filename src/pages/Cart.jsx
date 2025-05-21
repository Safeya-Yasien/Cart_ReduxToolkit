import { useDispatch, useSelector } from "react-redux";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import { clearCart, removeFromCart, updateQuantity } from "@rtk/cart/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const handleQuantityChange = (product, delta) => {
    const newQuantity = product.quantity + delta;
    if (newQuantity > 0) {
      dispatch(
        updateQuantity({ productId: product.id, quantity: newQuantity })
      );
    }
  };

  if (cart.length === 0) {
    return (
      <Container className="text-center py-5 mt-5">
        <h2>Your cart is empty.</h2>
      </Container>
    );
  }

  return (
    <Container>
      <h2 className="py-5 mt-4">Cart</h2>

      <Button
        variant="outline-danger"
        className="mb-4"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </Button>

      <div className="table-responsive">
        <Table striped bordered hover size="sm" className="align-middle">
          <thead>
            <tr>
              <th>Product Id</th>
              <th>Title</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Price (per unit)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>
                  <Image
                    src={product.image}
                    alt={product.title}
                    style={{ height: "80px", objectFit: "contain" }}
                  />
                </td>
                <td>
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => handleQuantityChange(product, -1)}
                    >
                      -
                    </Button>
                    <span>{product.quantity}</span>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => handleQuantityChange(product, 1)}
                    >
                      +
                    </Button>
                  </div>
                </td>
                <td>${product.price.toFixed(2)}</td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => dispatch(removeFromCart(product))}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <p className="fw-bold text-end fs-4">
        Total Price: ${totalPrice.toFixed(2)}
      </p>
    </Container>
  );
};

export default Cart;
