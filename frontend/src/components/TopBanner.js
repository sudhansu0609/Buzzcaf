
import { Link } from "react-router-dom";

const TopBanner = ({ imageUrl, description, price, name, productId }) => {
return (

<section className="hero">
        <div className="container">
            <div className="row">
       
                    <div className="col-lg-9">
                        <div className="hero__search">
                            <div className="hero__search__form">
                                <form action="#">
                                    <div className="hero__search__categories">
                                        All Categories
                                        <span className="arrow_carrot-down"></span>
                                    </div>
                                    <input type="text" placeholder="What do yo u need?"></input>
                                    <button type="submit" className="site-btn">SEARCH</button>
                                </form>
                            </div>
                            <div className="hero__search__phone">
                                <div className="hero__search__phone__icon">
                                    <i className="fa fa-phone"></i>
                                </div>
                                <div className="hero__search__phone__text">
                                    <h5>+65 11.188.888</h5>
                                    <span>support 24/7 time</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero__item set-bg" data-setbg={require("assets/img/logo/banner.jpg")}>
                            <div className="hero__text">
                                <span>Aromatic</span>
                                <h2>Coffee <br />100% Organic</h2>
                                <p>Premium Freeze dried coffee</p>
                                <a href="#" className="primary-btn">SHOP NOW</a>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

    </section>
    // <div className="topBanner">
    //     <div className="container">
    //         <div className="row">
    //             <div className="col-lg-6 col-md-6 col-sm-6">
    //                 <div className="banner__pic">
    //                     {/* <h1>"checking here"</h1> */}
    //                     <img src={require("assets/img/banner/banner-1.jpg")} alt="banner1" />
    //                 </div>
    //             </div>
    //             <div className="col-lg-6 col-md-6 col-sm-6">
    //                 <div className="banner__pic">
    //                     <img src={require("assets/img/banner/banner-2.jpg")} alt="" />
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
);
};    

export default TopBanner;