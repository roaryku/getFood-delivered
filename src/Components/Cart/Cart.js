import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice)
    return(
        <div>
            <img className='cartIcon' src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/null/external-shopping-cart-ecommerce-kiranshastry-solid-kiranshastry.png" alt="cartIcon"/>
            <h3>TOTAL: $ {totalPrice}</h3>
            {cartItems.map((cartItem, id) => <CartItem cartItem={cartItem} key={id}/>)}
        </div>
    )
}
export default Cart;