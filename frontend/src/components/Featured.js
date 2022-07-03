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

const Featured = ({ imageUrl, description, price, name, productId }) => {
  return (

    <section className="featured spad">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title">
                    <h2>Featured Product</h2>
                </div>
                <div className="featured__controls">
                    <ul>
                        <li className="active" data-filter="*">All</li>
                        <li data-filter=".oranges">Oranges</li>
                        <li data-filter=".fresh-meat">Fresh Meat</li>
                        <li data-filter=".vegetables">Vegetables</li>
                        <li data-filter=".fastfood">Fastfood</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="row featured__filter">
            <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                <div className="featured__item">
                    <div className="featured__item__pic set-bg" >
                    <img src={require("assets/img/featured/feature-1.jpg")} alt="" />
                        <ul className="featured__item__pic__hover">
                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div className="featured__item__text">
                        <h6><a href="#">Buzzcaf Desire</a></h6>
                        <h5>$30.00</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
                <div className="featured__item">
                    <div className="featured__item__pic set-bg" >
                    <img src={require("assets/img/featured/feature-2.jpg")} alt="" />
                        <ul className="featured__item__pic__hover">
                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div className="featured__item__text">
                        <h6><a href="#">Buzzcaf Original</a></h6>
                        <h5>$30.00</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
                <div className="featured__item">
                    <div className="featured__item__pic set-bg" >
                    <img src={require("assets/img/featured/feature-3.jpg")} alt="" />
                        <ul className="featured__item__pic__hover">
                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div className="featured__item__text">
                        <h6><a href="#">Belgian chocolate</a></h6>
                        <h5>$30.00</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
                <div className="featured__item">
                    <div className="featured__item__pic set-bg" >
                    <img src={require("assets/img/featured/feature-4.jpg")} alt="" />
                        <ul className="featured__item__pic__hover">
                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div className="featured__item__text">
                        <h6><a href="#">Irish Hazelnut</a></h6>
                        <h5>$30.00</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                <div className="featured__item">
                    <div className="featured__item__pic set-bg" >
                    <img src={require("assets/img/featured/feature-5.jpg")} alt="" />
                        <ul className="featured__item__pic__hover">
                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div className="featured__item__text">
                        <h6><a href="#">Caramel</a></h6>
                        <h5>$30.00</h5>
                    </div>
                </div>
            </div>
         
        </div>
    </div>
</section>
  );
};    

export default Featured;