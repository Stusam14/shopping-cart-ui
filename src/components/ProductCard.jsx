import { useCart } from "../context/CartContext";

const ProductCard = ({product}) => {

    const {addToCart} = useCart();
    return (  <div  className="product_container">

              <img 
                src={product.image} 
                alt={product.name} 
                className="product_img"
              />
              <h2 className="product_h2">{product.name}</h2>
              <p className="product_p">{product.description}</p>
              <p className="product_price_p">${product.price.toFixed(2)}</p>
              <button  onClick={()=> addToCart(product) } className="cart-button">Add To Chart</button>
            </div> );
}
 
export default ProductCard;