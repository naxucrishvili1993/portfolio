import React from "react";
import GitHub from "../icons/github.svg";
import LinkedIn from "../icons/linkedin.svg";
import Gmail from "../icons/gmail.svg";
import Discord from "../icons/discord.svg";

const Footer = (props) => {
	return (
		<section id="contact">
			<footer>
				<h1>Get In Touch</h1>
				<ul className="contact-list">
					<li>
						<a
							href="https://github.com/naxucrishvili1993"
							target="_blank"
							rel="noreferrer">
							{" "}
							<img src={GitHub} alt="GitHub" />
						</a>
						<a
							href="https://github.com/naxucrishvili1993"
							target="_blank"
							rel="noreferrer">
							naxucrishvili1993
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/giorginn/"
							target="_blank"
							rel="noreferrer">
							<img src={LinkedIn} alt="LinkedIn" />
						</a>
						<a
							href="https://www.linkedin.com/in/giorginn/"
							target="_blank"
							rel="noreferrer">
							Giorgi Nakhutsrishvili
						</a>
					</li>
					<li>
						<img src={Gmail} alt="Gmail" />
						giorginaxucrishvili70@gmail.com
					</li>
					<li>
						<a
							href="https://discord.com/users/607261983347048449"
							target="_blank"
							rel="noreferrer">
							<img src={Discord} alt="Discord" />
						</a>
						<a
							href="https://discord.com/users/607261983347048449"
							target="_blank"
							rel="noreferrer">
							nxcrius
						</a>
					</li>
				</ul>
				<p>&copy; Giorgi Nakhutsrishvili - 2022</p>
			</footer>
		</section>
	);
};

export default Footer;
