
import { useParams } from "react-router";
import { useState } from "react";
// import './TourDetails.css'
const data= require('../../Data/db.json');




const TourDetails =()=> {
  let {id}=useParams();
const [readMore,setReadMore]= useState(false)
return(
  <>
 {

  data.map(i =>{
    if(i.id === id){
      return (
        <div>
          <h2>{i.name}</h2>
          <img src={i.image} alt={i.name} />
          <p>{i.price}</p>
          <div>
            {readMore ? (
              <>
                <p>{i.info}</p>
                <button onClick={() => setReadMore(false)}>show less</button>
              </>
            ) :
              <>
                <p>{(i.info.substring(0,200))}</p>
                <button onClick={() => setReadMore(true)}>show more </button>
              </>
            }
          </div>
        </div>
      );
    }
  }

  )


 }


  </>
)


}




 export default TourDetails;