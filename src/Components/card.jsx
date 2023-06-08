
import star from "../Images/star.svg"

const Card = (props) => {

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    else if (props.location === "Online") {
        badgeText = "ONLINE"
    }


    return (
        <div className="cardContainer">
            <div className="imgContainer">
                <img src={`/src/Images/${props.coverImg}`} alt="" />
                {badgeText && <p className="tag">{badgeText}</p>}
            </div>
            <div className="card-desc">
                <div className="card--stats">
                    <span><img src={star} alt="star" /></span>
                    <p> {props.stats.rating} <span className="gray">({props.stats.reviewCount}) • {props.location} </span></p>
                </div>
                <p>{props.title}</p>
                <p><span style={{ fontWeight: 600 }}>From ${props.price}</span> / person</p>
            </div>
            <br />
        </div>
    );
}

export default Card;