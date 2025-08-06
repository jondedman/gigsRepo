import { useState } from "react";
import "./Gig.css"

const Gig = (props) => {
const [favourite, setFavourite] = useState(false)
const addFave =() => {
    if (favourite) {
        setFavourite(false);
    } else {
        setFavourite(true);
    }
    
}

const handleClick = () =>{    
    addFave();
}

    return (
<div className="gig-card">
<h3 className="band-name">{props.band}<i className="fas fa-heart" style={{color: "red", marginLeft: "16px", visibility: favourite ? "visible" : "hidden"}}></i></h3>
<img src={props.image} alt={props.altText} className="band-image"/>
<p className="gig-description">{props.description}</p>
<p className="gig-date">{props.date}</p>
<p className="gig-location">{props.location}</p>
<button onClick={handleClick}>Add Favourite</button>
</div>
    )
}

export default Gig;