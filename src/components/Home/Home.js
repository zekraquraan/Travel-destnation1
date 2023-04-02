import React from "react";
import Header from "../Header/Header.js";
import Tours from "../Tours/Tours.js";
import Footer from "../Footer/Footer.js";
const Data2= require("../../Data/db.json");
function Home (){
    return(        <>
<Header/>
 {  Data2.map(i=>{          
    return(            <Tours name ={i.name} image_url={i.image}/>          )        })}
<Footer/>
 </>)}
export default Home;