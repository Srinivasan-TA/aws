import React from 'react'
import "../components/cards.css"

const Cards = ({item, handleClick}) => {
    const {title, Journer, Language, Price , img} = item;
  return (
    <div className="cards">
        <div className="image-box">
            <img src={img} alt="Image" />
        </div>
        <div className="details">
            <p>{title}</p>
             <p>{Journer}</p> 
            <p>{Language}</p>
            <p>${Price}</p>
            <button onClick={()=> handleClick(item)}> Add to my WatchList </button>

            </div>  
           </div>
  )
}

export default Cards