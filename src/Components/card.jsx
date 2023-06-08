import cardImg from "../Images/cardImg.svg"
import star from "../Images/Star.svg"

const Card = (props) => {

    return (
        <div className="cardContainer">
            <div className="imgContainer">
                <img src={`src/Images/${props.img}`} alt="" />
                <p className="tag">SOLD OUT</p>
            </div>
            <div className="card-desc">
                <div className="card--stats">
                    <span><img src={star} alt="star" /></span>
                    <p> {props.rating} <span className="gray">({props.reviewCount}) • {props.country} </span></p>
                </div>
                <p>{props.title}</p>
                <p><span style={{ fontWeight: 600 }}>From ${props.price}</span> / person</p>
            </div>
            <br />
        </div>
    );
}

export default Card;