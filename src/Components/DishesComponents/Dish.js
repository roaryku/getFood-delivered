import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCard } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";


const Dish = ({dish}) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    return(
        
            <div className="dish">
                <img src={`./${dish.img}.jpg`} alt="food"/>
                <h2>{dish.name}</h2>
                <p>$ {dish.price}</p>
                <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
                <button onClick={() => dispatch(addItemToCard({dish, quantity}))}>ADD TO CARD</button>
            </div>
        )
}
export default Dish;