import React from "react";
import { useSelector } from "react-redux";

//styling
import styled from "styled-components";
import { motion } from "framer-motion";

function GameDetails() {
	//Data
	const { screen, game, isLoading } = useSelector((state) => state.detail);
	return (
		<>
			{!isLoading && (
				<CardShadow>
					<Detail>
						<Stats>
							<div className="rating">
								<h3>{game.name}</h3>
								<p>Rating: {game.rating}</p>
							</div>
							<Info>
								<h3>Platforms</h3>
								<Platforms>
									{game.platforms.map((data) => (
										<h3 key={data.platform.id}>{data.platform.name}</h3>
									))}
								</Platforms>
							</Info>
						</Stats>
						<Media>
							<img src={game.background_image} alt="background_image" />
						</Media>
						<Description>
							<p>{game.description_raw}</p>
						</Description>
						<Gallery>
							{screen.results.map((screen) => (
								<img src={screen.image} key={screen.id} alt="screen_image" />
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
	&::-webkit-scrollbar {
		width: 0.7rem;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #e74c3c;
	}
	&::-webkit-scrollbar-track {
		background-color: #424949;
	}
`;

const Detail = styled(motion.div)`
	width: 80%;
	border-radius: 1rem;
	padding: 2rem 5rem;
	background: white;
	position: absolute;
	left: 10%;
	color: black;
	img {
		width: 100%;
	}
`;

const Stats = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: space-around;
`;
const Info = styled(motion.div)`
	text-align: center;
`;
const Platforms = styled(motion.div)`
	display: flex;
	justify-content: space-evenly;
	img {
		margin-left: 3rem;
	}
`;
const Media = styled(motion.div)`
	margin-top: 5rem;
	img {
		width: 100%;
		/* height: 60vh;
		object-fit: cover; */
	}
`;
const Description = styled(motion.div)`
	margin: 5rem 0rem;
`;
const Gallery = styled(motion.div)`
	text-align: center;
`;

export default GameDetails;
