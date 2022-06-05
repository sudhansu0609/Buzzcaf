//import "./HomeScreen.css";
//import "../assets/css/bootstrap.min.css";
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import "../assets/css/font-awesome.min.css";
// import "../assets/css/elegant-icons.css";
// // import 'elegant-icons/style.css';  //../../node_modules/
// import "../assets/css/nice-select.css";
// // import 'jquery-nice-select/css/nice-select.css'; //../../node_modules/
// import "../assets/css/jquery-ui.min.css";
// // import 'jquery-ui-css/jquery-ui.min.css';  //../../node_modules/
// import "../assets/css/owl.carousel.css";
// // import 'owl.carousel/dist/assets/owl.carousel.min.css';  //../../node_modules/
// import "../assets/css/slicknav.min.css";
// // import 'slicknav/dist/slicknav.min.css';   //../../node_modules/
// import "../assets/css/style.css";
import React from "react";
import { Component, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Products from "../components/Products";
import Banner from "../components/Banner";
import Blog from "../components/Blog";
import Categories from "../components/Categories";
import Departements from "../components/Departments";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Hamberger from "../components/Hamberger";
import Header from "../components/Header";
import ReviewProducts from "../components/ReviewProducts";   
import TopRated from "../components/TopRated";

//Actions
// import { getProducts as listProducts } from "../redux/actions/productActions";

//const HomePage = () =>


const HomePage = () => {
 // const dispatch = useDispatch();

//   const getProducts = useSelector((state) => state.getProducts);
//   const { products, loading, error } = getProducts;

  // useEffect(() => {
  //   dispatch(listProducts());
  // }, [dispatch]);

    return (
      <div className="homepage">
        {/* <h2 className="homepage__title">Latest Products</h2> */}
        <div className="homepage__products">
        <Header></Header>
        <Departements></Departements>   
        <Categories></Categories>
        <Featured></Featured>
        <Banner className="banner"> 
        </Banner>
        {/* <Hamberger></Hamberger> */}
        <Products></Products>
        {/* <TopRated></TopRated>
        <ReviewProducts></ReviewProducts> */}
        <Blog></Blog>
        <Footer></Footer>
      </div>
      </div>
      
    );
   };
  

export default HomePage;