import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";
import useCart from "../../hooks/useCart";
import useSecure from "../../hooks/useSecure";
import useUser from "../../hooks/useUser";
import DetailPage from "../DetailPage/DetailPage";
// import products from "../library/products";
import "./ShopPage.scss";

const ShopPage = () => {
  const [user, setUser] = useUser();
  const [cart, setCart] = useCart(user.email);
  const { products } = useContext(ProductsContext);

  const navigate = useNavigate();

  useSecure(user);

  const [detail, setDetail] = useState(false);
  const [detailProduct, setDetailProduct] = useState(null);

  const onLogout = () => {
    setUser({ email: "" });
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const openDetail = (product) => {
    setDetailProduct(product);
    setDetail(true);
  };

  const backToShop = () => {
    setDetail(false);
    setDetailProduct(null);
  };

  return (
    <div className="container">
      <div className="header">
        <h2
          data-testid="user-name"
          className="header__user-name"
          key={user.email}
        >
          Welcome: {user.email}
        </h2>
        <div className="header__btns">
          {detail ? (
            <button className="btn" onClick={backToShop}>
              Back to shop
            </button>
          ) : (
            <button className="btn" onClick={onLogout}>
              Logout
            </button>
          )}
          <button
            className="btn"
            onClick={() => {
              navigate("/cart");
            }}
          >
            Cart
          </button>
        </div>
      </div>
      {detail ? (
        <DetailPage detailProduct={detailProduct} />
      ) : (
        <div className="products">
          {products.map((product) => {
            return (
              <div key={product.id} className="products__item">
                <h2 className="products__item-title">{product.title}</h2>
                <div className="products__item-img">
                  <img src={product.image} alt="" />
                </div>
                <p
                  data-testid="details"
                  onClick={() => openDetail(product)}
                  className="products__item-description"
                >
                  {product.text}
                </p>
                <div className="products__item-choose">
                  <h2>{product.price}</h2>
                  <button onClick={() => addToCart(product)} className="btn">
                    To cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ShopPage;
