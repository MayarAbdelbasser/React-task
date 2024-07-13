import "./ProductCard.css";
import Favorite from "../../assets/Favorite.svg";
import bag from "../../assets/Bag_alt.svg";

export default function ProductCard({
  title,
  thumbnail,
  price,
  discountPercentage,
  id,
  description,
}) {
  let newPrice = ((price * (100 - discountPercentage)) / 100).toFixed(2);
  return (
    <div className="product-contain" key={id}>
      <div className="img-contain">
        <img src={thumbnail} />
      </div>
      <div className="product-details">
        <p className="product-details-title">{title}</p>
        <p className="product-details-info">{description}</p>
        <div className="product-detials-price">
          <p className="new-price">{newPrice}</p>
          <p className="old-price">{price}</p>
        </div>
      </div>
      <div className="product-control">
        <div className="add-product">
          <img src={bag} />
          <p>Add to cart</p>
        </div>
        <div className="love-product">
          <img src={Favorite} />
        </div>
      </div>
    </div>
  );
}
