import React, { useEffect, useState } from "react";
import GlobalStyles from "./components/style/GlobalStyles";
//Components and pages
import Home from "./pages/Home";

function App() {
	return (
		<div>
			<GlobalStyles />
			<Home />
		</div>
	);
}

export default App;
