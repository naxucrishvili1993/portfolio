import React from "react";
import HomeIllustration from "../photos/home-illustration.svg";

const Home = () => {
	return (
		<section id="home">
			<div className="home-left-section">
				<h1>Hi, I'm Giorgi Nakhutsrishvili</h1>
				<p>
					I'm a <span>Junior Front-end Developer</span> with more
					than one year of experience, focused on quality and clean code. With a
					passion for both software development and personal growth, I attended
					100+ hour bootcamps to learn new technologies and languages.
				</p>
			</div>
			<div className="home-right-section">
				<img className="home-img" src={HomeIllustration} alt="Illustration" />
			</div>
		</section>
	);
};

export default Home;
