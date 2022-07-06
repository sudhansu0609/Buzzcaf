
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


const BelgianChocolatePage = () => {

   
       return (
         <div className="belgianChocolatePage">
           {/* <h2 className="homepage__title">Latest Products</h2> */}
           <div className="belgianChocolate_Page">
      
           <Header></Header>
           <Footer></Footer>
         </div>
         </div>
         
       );
      };
     
   
   export default BelgianChocolatePage;