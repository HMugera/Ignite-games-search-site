import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";

//Star images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

//get Star rating

export const getStarsRating = (gameRating) => {
	const stars = [];
	const rating = Math.floor(gameRating);
	for (let i = 1; i <= 5; i++) {
		if (i <= rating) {
			stars.push(<img alt="star" key={i} src={starFull} />);
		} else {
			stars.push(<img alt="star" key={i} src={starEmpty} />);
		}
	}
	return stars;
};

//get platform images
export const getPlatformImage = (platform) => {
	// switch (platform) {
	// 	case "PlayStation 4":
	// 		return playstation;
	// 	case "PlayStation 5":
	// 		return playstation;
	// 	case "Xbox Series S/X":
	// 		return xbox;
	// 	case "Xbox S":
	// 		return xbox;
	// 	case "Xbox One":
	// 		return xbox;
	// 	case "PC":
	// 		return steam;
	// 	case "Nintendo Switch":
	// 		return nintendo;
	// 	case "iOS":
	// 		return apple;
	// 	default:
	// 		return gamepad;
	// }
	//YEIY!! USING OO Concept instead of switch statement
	return (
		{
			"PlayStation 4": playstation,
			"PlayStation 5": playstation,
			"Xbox Series S/X": xbox,
			"Xbox S": xbox,
			"Xbox One": xbox,
			"Nintendo Switch": nintendo,
			PC: steam,
			iOS: apple,
		}[platform] || gamepad
	);
};

//Media resize
export const resizeImage = (imagePath, size) => {
	if (!imagePath) return null;
	const image = imagePath.match(/media\/screenshots/)
		? imagePath.replace(
				"media/screenshots",
				`media/resize/${size}/-/screenshots`
		  )
		: imagePath.replace("/media/games/", `/media/resize/${size}/-/games/`);

	return image;
};
