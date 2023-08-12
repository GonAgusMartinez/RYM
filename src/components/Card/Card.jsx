import React from "react";
import { Link } from "react-router-dom";

let Card = ({name, species, gender, image, onClose, id, origin}) =>{
   return(
      <div>
         {
            onClose ? <button onClick={()=>onClose(id)}>X</button> : null
         }
         
         <Link to={`/detail/${id}`} >
            <h2>{name}</h2>
         </Link>
         
         <h2>{species}</h2>
         <h2>{gender}</h2>
         {
            origin ? <h2>{origin.name}</h2> : null
         }
         
         <img  src={image} alt="" />
      </div>
   );
}

export default Card;