import React from "react";

//Styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";

//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

import { Link } from "react-router-dom";
function Game({ gameName, releaseDate, image, id }) {
	const dispatch = useDispatch();
	const loadDetailHandler = () => {
		dispatch(loadDetail(id));
	};
	return (
		<StyledGame onClick={loadDetailHandler}>
			<Link to={`/game/${id}`}>
				<img src={image} alt={gameName} />
				<h3>{gameName}</h3>
				<p>{releaseDate}</p>
			</Link>
		</StyledGame>
	);
}

const StyledGame = styled(motion.div)`
	min-height: 30vh;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
	text-align: center;
	border-radius: 1rem;
	cursor: pointer;
	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
	}
`;

export default Game;
