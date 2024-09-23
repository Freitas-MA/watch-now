import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/github";
import "react-social-icons/linkedin";

/**
 * AppFooter component renders the footer section of the application.
 * It includes a design credit and social media icons.
 *
 * @component
 * @example
 * return (
 *   <AppFooter />
 * )
 */
export default function AppFooter() {
	return (
		<footer className="flex flex-row w-full h-10 items-center justify-between fixed bottom-0 left-0 bg px-8 rounded-md z-50 custom-bg-primary">
			<p className="text-sm text-center flex items-center mr-4">
				<span className="font-thin">Designed by: {""}</span>
				<a
					href="https://mfreitas.vercel.app/"
					target="__blank"
					className="ml-1"
				>
					MFreitas
				</a>
			</p>
			<div className="grayscale flex justify-center items-center">
				<SocialIcon
					style={{ scale: "0.4" }}
					url="https://github.com/Freitas-MA"
				/>
				<SocialIcon
					style={{ scale: "0.4" }}
					url="https://www.linkedin.com/in/freitas-marcos/"
				/>
			</div>
		</footer>
	);
}
