/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Navbar = (props) => {
	return (
		<nav className="navbar">
			<div className="left-section">
				<h1 className="title-name">
					<a href="#home">Giorgi</a>
				</h1>
			</div>
			<div className="right-section">
				<a href="#home">
					<button>Home</button>
				</a>
				<a href="#work">
					<button>Work</button>
				</a>
				<a href="#contact">
					<button>Contact</button>
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
