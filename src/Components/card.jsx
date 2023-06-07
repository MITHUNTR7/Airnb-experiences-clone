import cardImg from "../Images/cardImg.svg"
import star from "../Images/Star.svg"

const Card = () => {
    return (
        <div className="cardContainer">
            <div className="imgContainer">
                <img src={cardImg} alt="" />
                <p className="tag">SOLD OUT</p>
            </div>
            <div className="card-desc">
                <div className="card--stats">
                    <span><img src={star} alt="star" /></span>
                    <p> 5.0 <span className="gray">(6) • USA </span></p>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p><span style={{ fontWeight: 600 }}>From $136</span> / person</p>
            </div>
            <br />
        </div>
    );
}

export default Card;