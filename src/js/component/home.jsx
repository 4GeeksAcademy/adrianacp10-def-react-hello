import React from "react";
import Jumbotron from "./jumbotron.js";
import Card from "./card.js";
import Navbar from "./navbar.js";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="container">
			<div>
				<Navbar />
				<Jumbotron />
			</div>
			<div className="d-flex p-3">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>

	)
};

export default Home;
