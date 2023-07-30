import React from 'react';

let Card = ({name, species, gender, image, onClose, id}) =>{
   return(
      <div>
         <button onClick={()=>onClose(id)}>X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt="" />
      </div>
   );
}

export default Card;
 
 
 