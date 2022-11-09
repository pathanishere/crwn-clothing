import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import CartItem from "../../components/cart-item/cart-item.component";
import { CartDropdownContainer, CartItems } from "./cart-dropdown.style";

import { CartContext } from "../../contexts/cart.context";

const CartDropDown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const navigationHandler = () => {
    navigate("/checkout");
    setIsCartOpen(false);
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} cartItem={cartItem} />;
        })}
      </CartItems>
      <Button onClick={navigationHandler}>Got to checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropDown;
