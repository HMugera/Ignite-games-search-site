import playstation from "./img/playstation.svg";
import steam from "./img/steam.svg";
import xbox from "./img/xbox.svg";
import nintendo from "./img/nintendo.svg";
import apple from "./img/apple.svg";
import gamepad from "./img/gamepad.svg";

//get platform images
export const getPlatform = (platform) => {
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
	const image = imagePath.match(/media\/screenshots/)
		? imagePath.replace(
				"media/screenshots",
				`media/resize/${size}/-/screenshots`
		  )
		: imagePath.replace("/media/games/", `/media/resize/${size}/-/games/`);

	return image;
};
