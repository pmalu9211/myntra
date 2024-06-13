import { useWindowWidth } from "@react-hook/window-size";

const Footer = () => {
  let width = useWindowWidth();

  return (
    <>
      <footer>
        <div className="footer_container">
          {width > 1200 && (
            <div className="footer_column">
              <h3>ONLINE SHOPPING</h3>

              <a href="#">Men</a>
              <a href="#">Women</a>
              <a href="#">Kids</a>
              <a href="#">Home & Living</a>
              <a href="#">Beauty</a>
              <a href="#">Gift Card</a>
              <a href="#">Myntra Insider</a>
            </div>
          )}

          <div className="footer_column">
            <h3>ONLINE SHOPPING</h3>

            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Gift Card</a>
            <a href="#">Myntra Insider</a>
          </div>

          <div className="footer_column">
            <h3>ONLINE SHOPPING</h3>

            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Gift Card</a>
            <a href="#">Myntra Insider</a>
          </div>
        </div>
        <hr />

        <div className="copyright">
          © 2023 www.myntra.com. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
