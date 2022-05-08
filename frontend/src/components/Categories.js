//import "./Product.css";
import "../assets/css/bootstrap.min.css";
//import "../assets/css/font-awesome.min.css";
import "../assets/css/elegant-icons.css";
import "../assets/css/nice-select.css";
//import "../assets/css/jquery-ui.min.css";
//import "../assets/css/owl.carousel.min.css";
import "../assets/css/slicknav.min.css";
import "../assets/css/style.css";
import { Link } from "react-router-dom";

const Categories = ({ imageUrl, description, price, name, productId }) => {
  return (

<section className="categories">
<div className="container">
    <div className="row">
        <div className="categories__slider owl-carousel">
            <div className="col-lg-3">
                <div className="categories__item set-bg" data-setbg={require("../assets/img/categories/cat-1.jpg")}>
                    <h5><a href="#">Fresh Fruit</a></h5>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="categories__item set-bg" data-setbg={require("../assets/img/categories/cat-2.jpg")}>
                    <h5><a href="#">Dried Fruit</a></h5>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="categories__item set-bg" data-setbg={require("../assets/img/categories/cat-3.jpg")}>
                    <h5><a href="#">Vegetables</a></h5>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="categories__item set-bg" data-setbg={require("../assets/img/categories/cat-4.jpg")}>
                    <h5><a href="#">drink fruits</a></h5>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="categories__item set-bg" data-setbg={require("../assets/img/categories/cat-5.jpg")}>
                    <h5><a href="#">drink fruits</a></h5>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
  );
};    

export default Categories;