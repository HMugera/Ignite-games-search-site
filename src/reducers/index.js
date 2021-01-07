import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import detailReducer from "./detailReducer";

const rootReducer = combineReducers({
	games: gamesReducer,
	gameDetail: detailReducer,
});

export default rootReducer;
