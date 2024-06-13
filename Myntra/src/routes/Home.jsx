import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

const Home = () => {
  const itemList = useSelector((state) => {
    return state.items;
  });

  return (
    <main>
      <div className="items-container">
        {itemList.map((item, index) => (
          <HomeItem key={index} item={item}></HomeItem>
        ))}
      </div>
    </main>
  );
};

export default Home;
