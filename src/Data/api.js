const dayjs = require("dayjs");

let now = dayjs();
const currentDay = now.format("DD");
const currentMonth = now.format("MM");
const currentYear = now.format("YYYY");
const currentDate = now.format("YYYY-MM-DD");
const nextYear = now.add("1", "year").format("YYYY-MM-DD");
const lastYear = now.subtract("1", "year").format("YYYY-MM-DD");

//Base Url
const base_url = "https://api.rawg.io/api/";

//Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

const popularGamesURL = () => `${base_url}${popular_games}`;

console.log(popularGamesURL());
