export default function HeroSection() {
    return (
        <section id="heroSectin" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section-content">
                    <p className="section--titile">
                        Hey,I'm Peter Sun
                    </p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">
                            Full Stack
                        </span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section-description">
                        I'm familiar with mainstream frontend languages and frameworks and backend languages. Experienced in middleware and server administration
                        <br />
                    </p>
                    <button className="btn btn-primary">Get In Touh</button>
                </div>
                <div className="hero--section--img">
                    <img src="./img/hero_img.png" alt="Hero Section" />
                </div>
            </div>
        </section>
    );
}