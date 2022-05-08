//import "./HomeScreen.css";
//import "../assets/css/bootstrap.min.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import "../assets/css/font-awesome.min.css";
import "../assets/css/elegant-icons.css";
import "../assets/css/nice-select.css";
//import "../assets/css/jquery-ui.min.css";
//import "../assets/css/owl.carousel.min.css";
import "../assets/css/slicknav.min.css";
import "../assets/css/style.css";
import React from "react";
import { Component, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Product from "../components/Products";
import Banner from "../components/Banner";
import Blog from "../components/Blog";
import Categories from "../components/Categories";
// import Departements from "../components/Departments";
// import Featured from "../components/Featured";
// import Footer from "../components/Footer";
// import Hamberger from "../components/Hamberger";
// import Header from "../components/Header";
// import Products from "../components/Products";
// import ReviewProducts from "../components/ReviewProducts";   
// import TopRated from "../components/TopRated";

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
        <Banner className="banner">
          <h1> Finally</h1>
        {/* <header></header>   */}
        </Banner>
        <Blog></Blog>
        <Categories></Categories>
        {/* <Departements></Departements>
        <Featured></Featured>
        <Footer></Footer>
        <Hamberger></Hamberger>
        <Header></Header>
        <Products></Products>
        <ReviewProducts></ReviewProducts>
        <TopRated></TopRated> */}
      </div>
      </div>
      
    );
   };
  

export default HomePage;