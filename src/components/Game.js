import React from "react";

//Styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { popup } from "../utils/animation";

//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

//router
import { Link } from "react-router-dom";

import { resizeImage } from "../utils/functions";

function Game({ gameName, releaseDate, image, id }) {
	const stringPathId = id.toString();

	const dispatch = useDispatch();
	const loadDetailHandler = () => {
		document.body.style.overflow = "hidden";
		dispatch(loadDetail(id));
	};
	return (
		<StyledGame
			variants={popup}
			initial="hidden"
			animate="show"
			layoutId={stringPathId}
			onClick={loadDetailHandler}
		>
			<Link to={`/game/${id}`}>
				<motion.img
					layoutId={`image ${stringPathId}`}
					src={resizeImage(image, 640)}
					alt={gameName}
				/>
				<motion.h3 layoutId={`title ${stringPathId}`}>{gameName}</motion.h3>
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
	overflow: hidden;
	margin: 0px auto;
	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
	}
	@media (min-width: 670px) {
		width: 100%;
	}
	@media (max-width: 380px) {
		width: 100%;
		margin: 0rem auto;
	}
`;

export default Game;
