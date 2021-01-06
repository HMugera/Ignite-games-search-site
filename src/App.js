import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { loadGames } from "./actions/gamesAction";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadGames());
	}, []);
	return (
		<div>
			<h1>Ignite code</h1>
		</div>
	);
}

export default App;
