
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


const IrishHazelnutPage = () => {

   
       return (
         <div className="irishHazelnut_Page">
           <div className="irishHazelnut_Page">
      
           <Header></Header>
           {/* <Products></Products> */}
           <Footer></Footer>
         </div>
         </div>
         
       );
      };
     
   
   export default IrishHazelnutPage;