import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
import Toastify from "toastify-js";

const HomeItem = ({ item }) => {
  // const onBtnClk = useSelector((store)=>{store.cart})
  const dispatch = useDispatch();
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count} reviews
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">( {item.discount_percentage}% OFF)</span>
      </div>
      <button
        className="btn-add-bag"
        onClick={() => {
          Toastify({
            text: "Product added to cart",
            duration: 1500, // Increased duration for better visibility
            gravity: "top", // Placing the toast at the top
            position: "right", // Placing the toast at the right
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #000000, #434343)", // Black background with a bit of white shade
              color: "#ffffff", // Ensuring the text color is white for visibility
              margine: "10px 200px",
              padding: "10px 20px", // Adding padding for better appearance
              borderRadius: "10px", // Rounded corners
              maxWidth: "300px", // Limiting the width of the toast
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Adding a subtle shadow for better look
              position: "fixed", // Fixing the position
              right: "120px", // Adding space from the right
              top: "120px", // Adding space from the top
              zIndex: 1000, // Ensuring the toast is above other elements
            },
            onClick: function () {}, // Callback after click
          }).showToast();
          console.log(item);
          dispatch(cartActions.addItem(item));
        }}
      >
        Add to Bag
      </button>
    </div>
  );
};

export default HomeItem;
