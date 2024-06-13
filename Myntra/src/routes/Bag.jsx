import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

const Bag = () => {
  const items = useSelector((store) => {
    return store.cart;
  });
  return (
    <main>
      <div className="bag-page">
        {items.length !== 0 ? (
          <>
            <div className="bag-items-container">
              {items.map((item) => (
                <BagItem item={item} key={item.id}></BagItem>
              ))}
            </div>
            <BagSummary />
          </>
        ) : (
          <div className="empty-cart">Please add items to cart</div>
        )}
      </div>
    </main>
  );
};

export default Bag;
