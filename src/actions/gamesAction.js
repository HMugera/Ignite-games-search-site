import Axios from "axios";
import { popularGamesURL } from "../Data/api";

//Action Creator :making an async function this wierd syntax below
export const loadGames = () => async (dispatch) => {
	//FETCH AXIOS
	const popularData = await Axios.get(popularGamesURL());
	dispatch({
		type: "FETCH_GAMES",
		payload: {
			popular: popularData.data.results,
		},
	});
};
