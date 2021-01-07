import Axios from "axios";
import { gameDetailURL, gameScreenshotURL } from "../Data/api";

export const loadDetail = (id) => async (dispatch) => {
	dispatch({
		type: "LOADING_DETAIL",
	});
	const detailData = await Axios.get(gameDetailURL(id));
	const screenShotData = await Axios.get(gameScreenshotURL(id));

	dispatch({
		type: "GET_DETAIL",
		payload: {
			game: detailData.data,
			screen: screenShotData.data,
		},
	});
};
