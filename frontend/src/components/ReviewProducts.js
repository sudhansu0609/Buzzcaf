//import "./Product.css";
// import "assets/css/bootstrap.min.css";
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import "assets/css/font-awesome.min.css";
// import "assets/css/elegant-icons.css";
// import "assets/css/nice-select.css";
// import "assets/css/jquery-ui.min.css";
// import "assets/css/owl.carousel.min.css";
// import "assets/css/slicknav.min.css";
// import "assets/css/style.css";
import { Link } from "react-router-dom";

const ReviewProducts = ({ imageUrl, description, price, name, productId }) => {
  return (

    <div className="col-lg-4 col-md-6">
        <div className="latest-product__text">
            <h4>Review Products</h4>
            <div className="latest-product__slider owl-carousel">
                <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                            <img src={require("assets/img/latest-product/lp-1.jpg")} alt="" />
                        </div>
                        <div className="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                        </div>
                    </a>
                    <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                            <img src={require("assets/img/latest-product/lp-2.jpg")} alt="" />
                        </div>
                        <div className="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                        </div>
                    </a>
                    <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                            <img src={require("assets/img/latest-product/lp-3.jpg")} alt="" />
                        </div>
                        <div className="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                        </div>
                    </a>
                </div>
                <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                            <img src={require("assets/img/latest-product/lp-1.jpg")} alt="" />
                        </div>
                        <div className="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                        </div>
                    </a>
                    <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                            <img src={require("assets/img/latest-product/lp-2.jpg")} alt="" />
                        </div>
                        <div className="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                        </div>
                    </a>
                    <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                            <img src={require("assets/img/latest-product/lp-3.jpg")} alt="" />
                        </div>
                        <div className="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
      
  );
};    

export default ReviewProducts;