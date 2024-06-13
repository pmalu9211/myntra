import { useSelector } from "react-redux";
import FetchItems from "../components/FetchItems";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../index.css";
import { Outlet } from "react-router-dom";
import Loading from "../components/Loading";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { fetchingStatus } = useSelector((state) => {
    return state.fetch;
  });
  console.log(fetchingStatus);

  return (
    <>
      <Header />
      <FetchItems />
      {fetchingStatus ? <Loading /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
