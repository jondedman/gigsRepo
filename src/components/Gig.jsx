import "./Gig.css";
import "./FavouriteButton";
import { useState } from "react";
import FavouriteButton from "./FavouriteButton";

const Gig = (props) => {
const [favourite, setFavourite] = useState(false)

const toggleFavourite = () => {
setFavourite((prev) => !prev);
}
    return (
<div className="gig-card">
<h3 className="band-name">{props.band}
<i className={`fas fa-heart ${favourite ? "visible-heart" : "hidden-heart"}`}></i>
</h3>
<img src={props.image} alt={props.altText} className="band-image"/>
<p className="gig-description">{props.description}</p>
<p className="gig-date">{props.date}</p>
<p className="gig-location">{props.location}</p>
<FavouriteButton toggleFavourite={toggleFavourite}/>
</div>
    )
}

export default Gig;