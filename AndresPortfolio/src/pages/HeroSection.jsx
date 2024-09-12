
export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="hero--title">Hey, My Name Is Andres Portillo</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Full Stack</span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--description">
                        <br /> 
                        Ready to take my next step in this industry.
                    </p>
                </div>
            </div>
            <div className="hero--section--img">
                <img src= "./PorfolioPhoto.JPG" alt="A photo of myself" />
            </div>
        </section>
    );
}