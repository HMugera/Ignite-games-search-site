const dayjs = require("dayjs");

let now = dayjs();
// const currentDay = now.format("DD");
// const currentMonth = now.format("MM");
// const currentYear = now.format("YYYY");
const currentDate = now.format("YYYY-MM-DD");
const nextYear = now.add("1", "year").format("YYYY-MM-DD");
const lastYear = now.subtract("1", "year").format("YYYY-MM-DD");

//Base Url
const base_url = "https://api.rawg.io/api/";

//Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

//GAME DETAILS
export const gameDetailURL = (game_id) => `${base_url}games/${game_id}`;

//GAME Screenshots
export const gameScreenshotURL = (game_id) =>
	`${base_url}games/${game_id}/screenshots`;

//Searched Game
export const searchedGameURL = (game_name) =>
	`${base_url}games?search=${game_name}&page_size=9`;
