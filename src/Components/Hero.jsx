import heroImg from "../Images/grid.svg"


const Hero = () => {
    return (

        <section>
            <img src={heroImg} alt="" className="section--img" />

            <div className="hero-content">
                <h1 className="hero-content--title">Online Experiences</h1>
                <p className="hero-content--desc">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </section>



    );
}

export default Hero;