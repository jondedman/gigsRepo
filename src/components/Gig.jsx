import "./Gig.css"

import { useState } from "react";


const Gig = (props) => {
const [favourite, setFavourite] = useState(false);
    
const addFave = () =>{
    if(!favourite){
    setFavourite(true);
} else {
    setFavourite(false)
}
}
const handleClick = () =>{
    addFave();
}

    return (
<div className="gig-card">
<h3 className="band-name">{props.band}<i className="fas fa-heart" style={{color: "red", marginLeft: "10px", visibility: favourite ? "visible": "hidden"}}></i></h3> 
<img src={props.image} alt={props.altText} className="band-image"/>
<p className="gig-description">{props.description}</p>
<p className="gig-date">{props.date}</p>
<p className="gig-location">{props.location}</p>
<button onClick={handleClick}>Favourite</button>
</div>
    )
}

export default Gig;