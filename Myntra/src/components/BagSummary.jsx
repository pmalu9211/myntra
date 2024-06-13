import { useSelector } from "react-redux";

const BagSummary = () => {
  const items = useSelector((store) => {
    return store.cart;
  });

  let original_price = 0;
  let current_price = 0;
  const convenienceFee = 99;
  items.map((item) => {
    original_price += item.original_price;
    current_price += item.current_price;
  });
  let discount = original_price - current_price;
  let total_amount = original_price - discount + convenienceFee;

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({1} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{original_price}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{discount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">{convenienceFee}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{total_amount}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummary;
