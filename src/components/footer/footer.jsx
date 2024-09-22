import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/github";
import "react-social-icons/linkedin";

export default function AppFooter() {
  return (
    <footer className="flex flex-row w-full h-10 items-center justify-start fixed bottom-0 left-0 bg px-4 rounded-md opacity-95 z-10">
      <p className="text-sm">
        <span className="font-thin">Designed by: </span>
        <a href="https://portfolio-sepia-eight-67.vercel.app/" target="__blank">
          MFreitas
        </a>
      </p>
      <div className="grayscale">
        <SocialIcon
          style={{ scale: "0.5" }}
          url="https://github.com/Freitas-MA"
        />
        <SocialIcon
          style={{ scale: "0.5" }}
          url="https://www.linkedin.com/in/freitas-marcos/"
        />
      </div>
    </footer>
  );
}