import React from "react";
import { useSelector } from "react-redux";

//styling
import styled from "styled-components";
import { motion } from "framer-motion";

import { useHistory } from "react-router-dom";

import {
	resizeImage,
	getPlatformImage,
	getStarsRating,
} from "../utils/functions";

function GameDetails({ pathId }) {
	const history = useHistory();
	//Exit Detail
	const exitDetailHandler = (e) => {
		const element = e.target;
		if (element.classList.contains("shadow")) {
			document.body.style.overflow = "auto";
			history.push("/");
		}
	};
	//Data
	const { screen, game, isLoading } = useSelector((state) => state.detail);
	return (
		<>
			{!isLoading && (
				<CardShadow className="shadow" onClick={exitDetailHandler}>
					<Detail layoutId={pathId}>
						<Stats>
							<div className="rating">
								<motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
								{/* <p>Rating: {game.rating}</p> */}
								<p>Rating</p>
								{getStarsRating(game.rating)}
							</div>
							<Info>
								<h3>Platforms</h3>
								<Platforms>
									{game.platforms.map((data) => (
										<img
											key={data.platform.id}
											src={getPlatformImage(data.platform.name)}
											alt={data.platform.name}
										/>
									))}
								</Platforms>
							</Info>
						</Stats>
						<Media>
							<motion.img
								layoutId={`image ${pathId}`}
								src={resizeImage(game.background_image, 1280)}
								alt="background_image"
							/>
						</Media>
						<Description>
							<p>{game.description_raw}</p>
						</Description>
						<Gallery>
							{screen.results.map((screen) => (
								<img
									src={resizeImage(screen.image, 1280)}
									key={screen.id}
									alt="screen_image"
								/>
							))}
						</Gallery>
					</Detail>
				</CardShadow>
			)}
		</>
	);
}

const CardShadow = styled(motion.div)`
	width: 100%;
	min-height: 100vh;
	overflow-y: scroll;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 5;
	&::-webkit-scrollbar {
		width: 0.7rem;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #e74c3c;
	}
	&::-webkit-scrollbar-track {
		background-color: #424949;
	}
	@media (max-width: 670px) {
		width: 80%;
		padding: 1rem 1rem;
	}
`;

const Detail = styled(motion.div)`
	width: 80%;
	border-radius: 1rem;
	padding: 2rem 5rem;
	background: white;
	position: absolute;
	left: 10%;
	z-index: 10;
	color: black;
	img {
		width: 100%;
	}
	@media (max-width: 670px) {
		padding: 1rem 0.5rem;
	}
`;

const Stats = styled(motion.div)`
	display: flex;

	align-items: center;
	justify-content: space-around;
	img {
		width: 2rem;
		height: 2rem;
		display: inline;
	}
	@media (max-width: 670px) {
		display: flex;
		justify-content: flex-start;
		h3 {
			display: inline;
		}
		img {
			width: 1rem;
			height: 1rem;
		}
		.rating {
			max-width: 10rem;
		}
	}
`;
const Info = styled(motion.div)`
	text-align: center;
	h3 {
		padding: 1.5rem;
	}
	@media (max-width: 670px) {
		position: absolute;
		top: 1rem;
		right: 1rem;
		h3 {
			padding: 0.5rem;
		}
	}
`;
const Platforms = styled(motion.div)`
	display: flex;
	justify-content: space-evenly;
	img {
		margin-left: 3rem;
	}
	@media (max-width: 670px) {
		img {
			margin-left: 0.5rem;
			margin-right: 0;
		}
	}
`;
const Media = styled(motion.div)`
	margin-top: 5rem;
	img {
		width: 100%;
		/* height: 80vh; */
		object-fit: cover;
	}

	@media (max-width: 670px) {
		margin-top: 1rem;
	}
`;
const Description = styled(motion.div)`
	margin: 5rem 0rem;
	@media (max-width: 670px) {
		margin: 1rem 0;
	}
`;
const Gallery = styled(motion.div)`
	text-align: center;
`;

export default GameDetails;
