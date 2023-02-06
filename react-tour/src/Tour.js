import React, { useState } from 'react';

const Tour = ({id,name,info,price,image,removeTour}) => {
    const[readMore,setReadMore] = useState(false)
 return <div className='single-tour'>
    <img src={image} alt="tour" />
    <div className="tour-info">
        <h4>{name}</h4>
        <p>{price}</p>
    </div>
    <div >
     {readMore?info:`${info.substring(0,200)}...`}
     <button onClick={()=>setReadMore(!readMore)}>{readMore?"show less":"readmore"}</button>
    </div>
     <button className='delete-btn' onClick={()=>{removeTour(id )}}>not interested</button>
    </div>;   
};
 
export default Tour;
