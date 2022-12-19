import React from "react";
import FirstPhoto from "../photos/youtube.svg";
import SecondPhoto from "../photos/commerce-app.svg";
import ThirdPhoto from "../photos/weather-app.svg";
import FourthPhoto from "../photos/quiz-app.svg";
import FifthPhoto from "../photos/calculator.svg";
import Calendar from "../icons/calendar.svg";
import Location from "../icons/location.svg";

const Work = () => {
	return (
		<section id="work">
			<div data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
				<div className="work-experience">
					<h1>Work Experience:</h1>
					<p>
						Bellboy at{" "}
						<a href="https://tiflispalace.ge/english/home">
							Tiflis Palace Hotel
						</a>
					</p>
					<ul>
						<li>
							<img src={Calendar} alt="Calendar" /> September 2021 - Present
						</li>
						<li>
							<img src={Location} alt="Location" /> Tbilisi, Georgia
						</li>
					</ul>
				</div>
				<div className="certifications">
					<h1>Certifications:</h1>
					<ul>
						<li>
							Responsive Web Design -{" "}
							<a href="https://www.freecodecamp.org/">FreeCodeCamp</a>
						</li>
						<li>
							JavaScript Algorithms and Data Structures -{" "}
							<a href="https://www.freecodecamp.org/">FreeCodeCamp</a>
						</li>
						<li>
							The Complete 2022 Web Development Bootcamp -{" "}
							<a href="https://www.udemy.com/">Udemy</a>
						</li>
					</ul>
				</div>
				<div className="skills">
					<h1>Skills:</h1>
					<ul className="skills-list">
						<li>HyperText Markup Language (HTML5)</li>
						<li>Cascading Style Sheets (CSS3)</li>
						<li>Bootstrap</li>
						<li>JavaScript</li>
						<li>jQuery</li>
						<li>React.js</li>
						<li>Git</li>
					</ul>
				</div>
			</div>
			<div className="projects-section">
				<div data-aos="fade-right" data-aos-duration="500" data-aos-once="true">
					<h1>Projects:</h1>
				</div>
				<div className="projects">
					<div className="project">
						<div
							className="projects-animation-div"
							data-aos="flip-up"
							data-aos-once="false"
							data-aos-duration="5000">
							<a
								href="https://naxucrishvili1993.github.io/youtube-clone/"
								target="_blank"
								rel="noreferrer">
								<img
									className="yt-logo"
									src={FirstPhoto}
									alt="Project Thumbnail"
								/>
							</a>
							<h1>
								<a
									href="https://naxucrishvili1993.github.io/youtube-clone/"
									target="_blank"
									rel="noreferrer">
									YouTube Clone
								</a>
							</h1>
						</div>
					</div>
					<div className="project">
						<div
							className="projects-animation-div"
							data-aos="flip-up"
							data-aos-once="false"
							data-aos-duration="500">
							<a
								href="https://naxucrishvili1993.github.io/commerce-app/"
								target="_blank"
								rel="noreferrer">
								<img src={SecondPhoto} alt="Project Thumbnail" />{" "}
							</a>

							<h1>
								<a
									href="https://naxucrishvili1993.github.io/commerce-app/"
									target="_blank"
									rel="noreferrer">
									Shopping Cart
								</a>
							</h1>
						</div>
					</div>
					<div className="project">
						<div
							className="projects-animation-div"
							data-aos="flip-up"
							data-aos-once="false"
							data-aos-duration="500">
							<a
								href="https://weather-app-react-inky.vercel.app/"
								rel="noreferrer"
								target="_blank">
								<img src={ThirdPhoto} alt="Project Thumbnail" />
							</a>
							<h1>
								<a
									href="https://weather-app-react-inky.vercel.app/"
									rel="noreferrer"
									target="_blank">
									Weather App
								</a>
							</h1>
						</div>
					</div>
					<div className="project">
						<div
							className="projects-animation-div"
							data-aos="flip-up"
							data-aos-once="false"
							data-aos-duration="500">
							<a
								href="https://naxucrishvili1993.github.io/quiz-app/"
								rel="noreferrer"
								target="_blank">
								<img src={FourthPhoto} alt="Project Thumbnail" />
							</a>
							<h1>
								<a
									href="https://naxucrishvili1993.github.io/quiz-app/"
									rel="noreferrer"
									target="_blank">
									Quiz App
								</a>
							</h1>
						</div>
					</div>
					<div className="project">
						<div
							className="projects-animation-div"
							data-aos="flip-up"
							data-aos-once="false"
							data-aos-duration="500">
							<a
								href="https://naxucrishvili1993.github.io/calculator/"
								rel="noreferrer"
								target="_blank">
								<img src={FifthPhoto} alt="Project Thumbnail" />
							</a>
							<h1>
								<a
									href="https://naxucrishvili1993.github.io/calculator/"
									rel="noreferrer"
									target="_blank">
									Calculator
								</a>
							</h1>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Work;
