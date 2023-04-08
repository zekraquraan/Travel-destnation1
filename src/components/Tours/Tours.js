import React from "react";
import Tour from './Tour/Tour';
import {Link} from "react-router-dom";

function Tours(props){

    return (
      <>{
        props.data.map(Tour=>{
          return(
            <div key={Tour.id}>
              <Link to={`/city/${Tour.id}`}>
                <Tour name={Tour.name} image={Tour.image}/>
              </Link>
              </div>
          )
        })
      }
      </>
    )
} 
      
 

export default Tours;