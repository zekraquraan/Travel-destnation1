import React from "react";
import Header from "../Header/Header.js";
import Tours from "../Tours/Tours.js";
//import Footer from "../Footer/Footer.js";
//const Data1= require("./Data/db.json");
function Home(props) {
    const data = props.data;
    return (
        <>


            <Header />
             <Tours data={props.data} />
            {data.map(element => {
                return (
                    <Tours name={element.name} image_url={element.image} />
                )
            })}

            



        </>
    )
}

export default Home;