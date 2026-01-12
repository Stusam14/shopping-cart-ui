import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useState} from "react";
import ProductCard from "./ProductCard";

const Header = () => {

    const [showDropdown, setShowDropdown] = useState(false);

    const {cart, removeFromCart, clearCart} = useCart();
    const itemCount = cart.reduce((prev, item) => prev + item.qty ,0);
    const total = cart.reduce((prev, item) => prev + item.price * item.qty ,0).toFixed(2);


    return ( 
        <header className="header-container">
            <h1 className="header-container-h1">ShopMate</h1>
            <div className="header-icon-container">
                <button className="header-icon-button" onClick={ () => setShowDropdown(!showDropdown) }> 
                    <FaShoppingCart className="header-icon" />
                    {
                        itemCount > 0 && (
                            <span className="cart-icon-count">{itemCount}</span>
                        )
                    }
                </button>

                {showDropdown && (
                    <div className="cart-container">
                        <div className="cart-container-container">
                            <h2 className="cart-container-h2">Cart Items</h2>
                            {
                                cart.length === 0 ? 
                                (
                                    <p className="cart-option-statement">Your cart is empty</p>
                                ):
                                (
                                <>
                                    <ul className="cart-list">
                                        {
                                            cart.map((item)=> 
                                            (
                                                <li 
                                                    key={item.id}
                                                    className="cart-item"
                                                >
                                                    <div>
                                                        <p className="item-p1">{item.name}</p>
                                                        <p className="item-p2"> {item.qty} x ${item.price}</p>
                                                    </div>
                                                    <button onClick={() => removeFromCart(item.id)} className="cart-remove-btn" >Remove</button>
                                                </li>
                                            ))
                                        }
                                    </ul>

                                    <div className="cart-total" >
                                        <span>Total:</span>
                                        <span>${total}</span>
                                    </div>
                                    <button onClick={clearCart} className="clear-btn">Clear Cart</button>
                                </>  
                                )
                        
                            }
                        </div>
                    </div>
                )}
                
            </div>
        </header>
     );
}
 
export default Header;