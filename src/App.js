import React from "react";
//Styling
import GlobalStyles from "./components/style/GlobalStyles";
//Components and pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
//Router
import { Route } from "react-router-dom";

function App() {
	return (
		<div>
			<GlobalStyles />
			<Nav />
			<Route path={["game/:id", "/"]}>
				<Home />
			</Route>
		</div>
	);
}

export default App;
