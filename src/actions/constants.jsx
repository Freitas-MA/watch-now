/**
 * @fileoverview This file contains constants used in the YouTube clone app.
 * It includes imports for various Material-UI icons, and exports several constants
 * such as the logo path, categories array, and demo data for thumbnails, channels, and videos.
 * 
 * @module constants
 */

 /**
	* @constant {string} logo - Path to the logo image.
	*/

 /**
	* @constant {Array<Object>} categories - Array of category objects, each containing a name and an icon.
	* @property {string} name - The name of the category.
	* @property {JSX.Element} icon - The icon representing the category.
	*/

 /**
	* @constant {string} demoThumbnailUrl - URL of the demo thumbnail image.
	*/

 /**
	* @constant {string} demoChannelUrl - URL of the demo channel.
	*/

 /**
	* @constant {string} demoVideoUrl - URL of the demo video.
	*/

 /**
	* @constant {string} demoChannelTitle - Title of the demo channel.
	*/

 /**
	* @constant {string} demoVideoTitle - Title of the demo video.
	*/

 /**
	* @constant {string} demoProfilePicture - URL of the demo profile picture.
	*/
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SchoolIcon from "@mui/icons-material/School";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";

export const logo = "/logo.png";

export const categories = [
	{ name: "New", icon: <HomeIcon /> },
	{ name: "Coding", icon: <CodeIcon /> },
	{ name: "ReactJS", icon: <CodeIcon /> },
	{ name: "NextJS", icon: <CodeIcon /> },
	{ name: "Music", icon: <MusicNoteIcon /> },
	{ name: "Education", icon: <SchoolIcon /> },
	{ name: "Podcast", icon: <GraphicEqIcon /> },
	{ name: "Movie", icon: <OndemandVideoIcon /> },
	{ name: "Gaming", icon: <SportsEsportsIcon /> },
	{ name: "Live", icon: <LiveTvIcon /> },
	{ name: "Sport", icon: <FitnessCenterIcon /> },
	{ name: "Fashion", icon: <CheckroomIcon /> },
	{ name: "Beauty", icon: <FaceRetouchingNaturalIcon /> },
	{ name: "Comedy", icon: <TheaterComedyIcon /> },
	{ name: "Gym", icon: <FitnessCenterIcon /> },
	{ name: "Crypto", icon: <DeveloperModeIcon /> },
];

export const demoThumbnailUrl = "https://i.ibb.co/G2L2Gwp/API-Course.png";
export const demoChannelUrl = "/channel/UCmXmlB4-HJytD7wek0Uo97A";
export const demoVideoUrl = "/video/GDa8kZLNhJ4";
export const demoChannelTitle = "JavaScript Mastery";
export const demoVideoTitle =
	"Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI";
export const demoProfilePicture =
	"http://dergipark.org.tr/assets/app/images/buddy_sample.png";
