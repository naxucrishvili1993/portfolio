import React, { useLayoutEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Work from "./Work";
import Footer from "./Footer";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
	useLayoutEffect(() => {
		AOS.init();
	});
	return (
		<div className="container">
			<Navbar />
			<Home />
			<Work />
			<Footer />
		</div>
	);
};

export default App;
