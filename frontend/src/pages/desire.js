
import React from "react";
import { Component, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Products from "../components/Products";
import Footer from "../components/Footer";
import Header from "../components/Header";

//Actions
// import { getProducts as listProducts } from "../redux/actions/productActions";

//const HomePage = () =>


const DesirePage = () => {

   
       return (
         <div className="desire_Page">
           {/* <h2 className="homepage__title">Latest Products</h2> */}
           <div className="desire_Page">
      
           <Header></Header>
           {/* <Products></Products> */}
           <Footer></Footer>
         </div>
         </div>
         
       );
      };
     
   
   export default DesirePage;