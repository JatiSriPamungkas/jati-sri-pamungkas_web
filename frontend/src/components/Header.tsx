import JattLogo from "../assets/jatt-light.svg";
import { Link } from "react-router";
import { Button } from "./ui/button";
import HoverItem from "./HoverItem";
import { MoonStar } from "lucide-react";

const Header = () => {
	return (
		<>
			<header className="h-50 flex justify-between items-center">
				<Link to="#profile">
					<img src={JattLogo} width={60} alt="Jati Sri Pamungkas" />
				</Link>
				<nav className="flex items-center gap-10">
					<Button
						size="icon"
						className="bg-transparent text-jati-3 p-2 cursor-pointer hover:bg-transparent"
					>
						<MoonStar className="!w-7 !h-7" />
					</Button>
					<ul className="flex gap-16 font-semibold text-[18px]">
						<HoverItem>Profile</HoverItem>
						<HoverItem>Skills</HoverItem>
						<HoverItem>Education</HoverItem>
						<HoverItem>Project</HoverItem>
						<HoverItem>Contact</HoverItem>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Header;
