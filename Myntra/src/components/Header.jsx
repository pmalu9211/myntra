import { IoPersonCircleSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useWindowWidth } from "@react-hook/window-size";

const Header = () => {
  let width = useWindowWidth();
  const items = useSelector((store) => {
    return store.cart;
  });
  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </Link>
        </div>
        {width > 1200 && (
          <nav className="nav_bar">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">
              Studio <sup>New</sup>
            </a>
          </nav>
        )}
        {width > 700 && (
          <div className="search_bar">
            <span>
              <CiSearch className="search_bar_icon" />
            </span>
            <input
              className="search_input"
              placeholder="Search for products, brands and more"
            />
          </div>
        )}
        <div className="action_bar">
          <div className="action_container">
            <span>
              <IoPersonCircleSharp />
            </span>
            <span className="action_name">Profile</span>
          </div>

          <div className="action_container">
            <span className="material-symbols-outlined action_icon">
              <FaHeart />
            </span>
            <span className="action_name">Wishlist</span>
          </div>

          <Link className="action_container" to="/bag">
            <span className="material-symbols-outlined action_icon">
              <IoBag />
            </span>
            <span className="action_name">Bag</span>
            {items.length > 0 && (
              <span className="bag-item-count">{items.length}</span>
            )}
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
