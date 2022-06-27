import "./DetailPage.scss";

const DetailPage = ({ detailProduct }) => {
  return (
    <div className="container">
      <div key={detailProduct.id} className="detail-item">
        <h2 className="detail-item__title">{detailProduct.title}</h2>
        <div className="detail-item__img">
          <img src={detailProduct.image} alt="" />
        </div>
        <p className="detail-item__description">{detailProduct.text}</p>
        <div className="detail-item__choose">
          <h2>Price: {detailProduct.price}</h2>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
