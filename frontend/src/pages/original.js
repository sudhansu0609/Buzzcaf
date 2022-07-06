
import React from "react";
import { Component, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Products from "../components/Products";
import Footer from "../components/Footer";
import Header from "../components/Header";

const OriginalPage = () => {

   
       return (
         <div className="original_Page">
           <div className="original_Page">
      
           <Header></Header>
           {/* <Products></Products> */}
           <Footer></Footer>
         </div>
         </div>
         
       );
      };
     
   
   export default OriginalPage;