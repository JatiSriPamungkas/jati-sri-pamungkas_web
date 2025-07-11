import JattLogo from "../assets/jatt-light.svg";
import { Button } from "./ui/button";
import { Menu, MoonStar } from "lucide-react";
import ListHoverNavbar from "./ListHoverNavbar";
import { useState } from "react";

const Header = () => {
	const [isShow, setIsShow] = useState<boolean>(false);

	return (
		<>
			<header
				className={`${
					isShow ? "h-110" : "h-25"
				} border-b-2 flex flex-col justify-between p-8 transition-all overflow-hidden`}
			>
				<div className="w-full flex justify-between items-center">
					<a href="#profile">
						<img
							id="profile"
							src={JattLogo}
							width={75}
							alt="Jati Sri Pamungkas"
							className="cursor-pointer"
						/>
					</a>
					<Button
						variant="ghost"
						size="icon"
						onClick={() => setIsShow(!isShow)}
						className="p-2 active:bg-jati-5 active:text-white cursor-pointer"
					>
						<Menu className="!w-7 !h-7" />
					</Button>
				</div>
				<nav className="flex items-center gap-10 mt-12">
					<Button
						size="icon"
						className="bg-transparent text-jati-3 p-2 cursor-pointer hover:bg-transparent hidden"
					>
						<MoonStar className="!w-7 !h-7" />
					</Button>
					<ListHoverNavbar
						listHoverNavbar={["Profile", "Skills", "Education", "Project", "Contact"]}
					/>
				</nav>
			</header>
		</>
	);
};

export default Header;
