import React, { useEffect, useState } from "react";
import GlobalStyles from "./components/style/GlobalStyles";
//Components and pages
import Home from "./pages/Home";

import { Route } from "react-router-dom";

function App() {
	return (
		<div>
			<GlobalStyles />
			<Route path={["game/:id", "/"]}>
				<Home />
			</Route>
		</div>
	);
}

export default App;
