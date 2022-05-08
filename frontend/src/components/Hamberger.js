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

const Hamberger = ({ imageUrl, description, price, name, productId }) => {
  return (

    <div className="header">
    <div className="humberger__menu__overlay"></div>
    <div className="humberger__menu__wrapper">
        <div className="humberger__menu__logo">
            <a href="#"><img src={require("../assets/img/logo.png")} alt=""></img></a>
        </div>
        <div className="humberger__menu__cart">
            <ul>
                <li><a href="#"><i className="fa fa-heart"></i> <span>1</span></a></li>
                <li><a href="#"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
            </ul>
            <div className="header__cart__price">item: <span>$150.00</span></div>
        </div>
        <div className="humberger__menu__widget">
            <div className="header__top__right__language">
                <img src={require("../assets/img/language.png")} alt=""></img>
                <div>English</div>
                <span className="arrow_carrot-down"></span>
                <ul>
                    <li><a href="#">Spanis</a></li>
                    <li><a href="#">English</a></li>
                </ul>
            </div>
            <div className="header__top__right__auth">
                <a href="#"><i className="fa fa-user"></i> Login</a>
            </div>
        </div>
        <nav className="humberger__menu__nav mobile-menu">
            <ul>
                <li className="active"><a href="./index.html">Home</a></li>
                <li><a href="./shop-grid.html">Shop</a></li>
                <li><a href="#">Pages</a>
                    <ul className="header__menu__dropdown">
                        <li><a href="./shop-details.html">Shop Details</a></li>
                        <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                        <li><a href="./checkout.html">Check Out</a></li>
                        <li><a href="./blog-details.html">Blog Details</a></li>
                    </ul>
                </li>
                <li><a href="./blog.html">Blog</a></li>
                <li><a href="./contact.html">Contact</a></li>
            </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
        <div className="header__top__right__social">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-pinterest-p"></i></a>
        </div>
        <div className="humberger__menu__contact">
            <ul>
                <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                <li>Free Shipping for all Order of $99</li>
            </ul>
        </div>
    </div>
    </div>
  );
};    

export default Hamberger;