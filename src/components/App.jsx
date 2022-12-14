import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Work from "./Work";
import Footer from "./Footer";
import "../App.css";

const App = () => {
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
