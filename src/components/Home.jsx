import React from "react";
import HomeIllustration from "../photos/home-illustration.svg";

const Home = () => {
	return (
		<section id="home">
			<div className="home-left-section">
				<div
					data-aos="fade-right"
					data-aos-delay="50"
					data-aos-duration="500"
					data-aos-easing="ease-in-out"
					data-aos-mirror="true"
					data-aos-once="true">
					<h1>Hi, I'm Giorgi Nakhutsrishvili</h1>
					<p>
						I'm a <span>Junior Front-end Developer</span> with more than one
						year of experience, focused on quality and clean code. With a
						passion for both software development and personal growth, I
						attended 100+ hour bootcamps to learn new technologies and
						languages.
					</p>
				</div>
			</div>
			<div className="home-right-section">
				<div
					data-aos="fade-left"
					data-aos-delay="50"
					data-aos-duration="500"
					data-aos-easing="ease-in-out"
					data-aos-mirror="true"
					data-aos-once="true">
					<img className="home-img" src={HomeIllustration} alt="Illustration" />
				</div>
			</div>
		</section>
	);
};

export default Home;
