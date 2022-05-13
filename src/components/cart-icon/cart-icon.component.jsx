import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount,
} from "./cart-icon.styles.jsx";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const ToggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={ToggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
