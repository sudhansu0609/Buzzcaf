//import "./Product.css";
//import "../assets/css/bootstrap.min.css";
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import "../assets/css/font-awesome.min.css";
// import "../assets/css/elegant-icons.css";
// import "../assets/css/nice-select.css";
// import "../assets/css/jquery-ui.min.css";
// import "../assets/css/owl.carousel.min.css";
// import "../assets/css/slicknav.min.css";
// import "../assets/css/style.css";
import { Link } from "react-router-dom";

const Banner = ({ imageUrl, description, price, name, productId }) => {
return (

    <div className="banner">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="banner__pic">
                        {/* <h1>"checking here"</h1> */}
                        <img src={require("assets/img/banner/banner-1.jpg")} alt="banner1" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="banner__pic">
                        <img src={require("assets/img/banner/banner-2.jpg")} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};    

export default Banner;