import { useDispatch } from "react-redux";
import dataDishes from "../../data/dataDishes";
import { removeItemFromCard } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {
    const dispatch = useDispatch();
    const dishes = dataDishes.find(item => item.id === cartItem.dishId)
    return(
        <div>
            <p>{dishes.name}</p>
            <p>{cartItem.quantity} portion(s)</p>
            <p>$ {dishes.price * cartItem.quantity}</p>
            <span onClick={() => dispatch(removeItemFromCard({cartItemId: cartItem.id}))}>
            <img className='iconDelete' src="https://img.icons8.com/fluency-systems-filled/48/null/delete-forever.png" alt="delete"/>
            </span>
        </div>
    )
}
export default CartItem;