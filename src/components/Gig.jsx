import "./Gig.css"

const Gig = (props) => {
    return (
<div className="gig-card">
<h3 className="band-name">{props.band}</h3> 
<img src={props.image} alt={props.altText} className="band-image"/>
<p className="gig-description">{props.description}</p>
<p className="gig-date">{props.date}</p>
<p className="gig-location">{props.location}</p>
</div>
    )
}

export default Gig;