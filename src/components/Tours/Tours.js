import React from "react";


function Tours(info) {

  return (
    <>


      <h2>{info.name}</h2>

      <img src={info.image_url} alt={info.name} />


    </>
  );
}

export default Tours;