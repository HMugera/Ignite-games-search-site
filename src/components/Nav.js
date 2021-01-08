import React from "react";
//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
import firelogo from "../img/firelogo.jpg";

function Nav() {
	return (
		<StyledNav>
			<Logo>
				<img src={firelogo} alt="logo" />
				<h1>Ignite</h1>
			</Logo>
			<div className="search">
				<input type="text" />
				<button>Search</button>
			</div>
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
		box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
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
`;
export default Nav;
