import React, { useState } from "react";
//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animation";

//logo
import firelogo from "../img/firelogo.jpg";

//Redux and Route
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

function Nav() {
	const [searchedGame, setSearchedGame] = useState("");

	const dispatch = useDispatch();

	const inputHandler = (e) => {
		setSearchedGame(e.target.value);
	};
	const submitSearch = (e) => {
		if (searchedGame === "") {
			return;
		}
		e.preventDefault();
		dispatch(fetchSearch(searchedGame));
	};
	const clearSearch = () => {
		dispatch({ type: "CLEAR_SEARCHED" });
		setSearchedGame("");
	};
	return (
		<StyledNav variants={fadeIn} initial="hidden" animate="show">
			<Logo onClick={clearSearch}>
				<img src={firelogo} alt="logo" />
				<h1>Ignite</h1>
			</Logo>
			<form className="search">
				<input
					required
					value={searchedGame}
					onChange={inputHandler}
					type="text"
				/>
				<button onClick={submitSearch} type="submit">
					Search
				</button>
			</form>
		</StyledNav>
	);
}

const StyledNav = styled(motion.nav)`
	padding: 3rem 5rem 1rem 5rem;
	text-align: center;
	input {
		width: 30%;
		font-size: 1.5rem;
		padding: 0.5rem;
		border-radius: 10px;
		margin-top: 1rem;
		outline: none;
		border: 2px solid #000;

		box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
	}
	button {
		font-size: 1.5rem;
		border: none;
		padding: 0.5rem 2rem;
		cursor: pointer;
		background: #f37e66;
		color: #fff;
		outline: none;
		margin-left: 1rem;
		border-radius: 10px;
		transition: transform 0.4s;

		&:hover {
			transform: scale(1.1);
		}
	}
	@media (max-width: 670px) {
		padding: 0.5rem 0.5rem;
		input {
			width: 50%;
			font-size: 1rem;
		}
		button {
			font-size: 1rem;
		}
	}
`;
const Logo = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	img {
		width: 3rem;
		height: 2.5rem;
		object-fit: cover;
	}
	@media (max-width: 670px) {
		padding: 0.5rem;
	}
`;
export default Nav;
