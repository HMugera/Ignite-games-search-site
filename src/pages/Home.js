import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { loadGames } from "../actions/gamesAction";
import Game from "../components/Game";

//Styling and animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import GameDetails from "../components/GameDetails";

import { useLocation } from "react-router-dom";

function Home() {
	//get current location
	const location = useLocation();
	const pathId = location.pathname.split("/")[2];

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadGames());
	}, [dispatch]);

	//Get data from state
	const { popular, newGames, upcoming, searched } = useSelector(
		(state) => state.games
	);

	return (
		<GameList>
			<AnimateSharedLayout type="crossfade">
				<AnimatePresence>
					{pathId && <GameDetails pathId={pathId} />}
				</AnimatePresence>
				{searched.length ? (
					<>
						<h2>Searched Games</h2>
						<Games>
							{searched.map((game) => (
								<Game
									gameName={game.name}
									id={game.id}
									image={game.background_image}
									releaseDate={game.released}
									key={game.id}
								/>
							))}
						</Games>
					</>
				) : null}
				<h2>Upcoming Games</h2>
				<Games>
					{upcoming.map((game) => (
						<Game
							gameName={game.name}
							id={game.id}
							image={game.background_image}
							releaseDate={game.released}
							key={game.id}
						/>
					))}
				</Games>
				<h2>New Games</h2>
				<Games>
					{newGames.map((game) => (
						<Game
							gameName={game.name}
							id={game.id}
							image={game.background_image}
							releaseDate={game.released}
							key={game.id}
						/>
					))}
				</Games>
				<h2>Popular Games</h2>
				<Games>
					{popular.map((game) => (
						<Game
							gameName={game.name}
							id={game.id}
							image={game.background_image}
							releaseDate={game.released}
							key={game.id}
						/>
					))}
				</Games>
			</AnimateSharedLayout>
		</GameList>
	);
}

const GameList = styled(motion.div)`
	padding: 0rem 5rem;
	h2 {
		padding: 5rem 0rem;
	}
`;
const Games = styled(motion.div)`
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
	grid-column-gap: 3rem;
	grid-row-gap: 5rem;
`;

export default Home;
