import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useUser from "../../hooks/useUser";
import "./Cart.scss";

const Cart = () => {
  const [user] = useUser();
  const navigate = useNavigate();
  const [cart, setCart] = useCart(user.email);

  const deleteProduct = (product) => {
    setCart(cart.filter((chooseProduct) => chooseProduct.id !== product.id));
  };

  return (
    <div className="container">
      <div className="header">
        <div className="header__logo">Nice Logo</div>
        <div className="header__btns">
          <button
            className="btn"
            onClick={() => {
              navigate("/shoppage");
            }}
          >
            Shop
          </button>
          <button className="btn">Go to pay</button>
        </div>
      </div>

      {cart.length === 0 ? (
        <h2>Cart is empty...</h2>
      ) : (
        <div className="cart-list">
          {cart.map((product) => {
            return (
              <div key={product.id} className="cart-list__product">
                <h2 className="cart-list__product-title" key={product.title}>
                  {product.title}
                </h2>
                <div key={product.image} className="cart-list__product-image">
                  <img src={product.image} alt="" />
                </div>
                <h2 key={product.price} className="cart-list__product-price">
                  Price: {product.price}
                </h2>
                <button
                  onClick={() => deleteProduct(product)}
                  className="cart-list__product-delete btn"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Cart;
