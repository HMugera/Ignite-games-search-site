import Axios from "axios";
import {
	popularGamesURL,
	upcomingGamesURL,
	newGamesURL,
	searchedGameURL,
} from "../Data/api";

//Action Creator :making an async function this wierd syntax below
export const loadGames = () => async (dispatch) => {
	//FETCH AXIOS
	const popularData = await Axios.get(popularGamesURL());
	const newGamesData = await Axios.get(newGamesURL());
	const upcomingData = await Axios.get(upcomingGamesURL());
	dispatch({
		type: "FETCH_GAMES",
		payload: {
			popular: popularData.data.results,
			upcoming: upcomingData.data.results,
			newGames: newGamesData.data.results,
		},
	});
};

export const fetchSearch = (game_name) => async (dispatch) => {
	const searchedGame = await Axios.get(searchedGameURL(game_name));
	dispatch({
		type: "FETCH_SEARCHED",
		payload: {
			searched: searchedGame.data.results,
		},
	});
};
