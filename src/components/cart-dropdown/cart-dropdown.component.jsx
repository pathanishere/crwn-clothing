import { useContext } from "react";

import Button from "../button/button.component";
import CartItem from "../../components/cart-item/cart-item.component";
import "./cart-dropdown.style.scss";

import { CartContext } from "../../contexts/cart.context";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} cartItem={cartItem} />;
        })}
      </div>
      <Button>Got to checkout</Button>
    </div>
  );
};

export default CartDropDown;
