import React from "react";
function Tours(data){
    return (      <>
        <h2>{data.name}</h2>
        <img src={data.image_url} alt={data.name} />
      </>    );}
export default Tours;