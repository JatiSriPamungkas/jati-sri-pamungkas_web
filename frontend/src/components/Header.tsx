import JattLogo from "../assets/jatt-light-no-bg.png";
import { Button } from "./ui/button";
import { Menu, MoonStar } from "lucide-react";
import ListHoverNavbar from "./ListHoverNavbar";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
	const [isShow, setIsShow] = useState<boolean>(false);

	return (
		<>
			<header
				id="profile"
				className={`${
					isShow ? "h-105" : "h-30"
				} border-b-2 flex flex-col justify-between px-8 py-6 transition-all duration-500 overflow-hidden`}
			>
				<div className="w-full flex justify-between items-center mb-8">
					<Link to="/">
						<img
							src={JattLogo}
							width={75}
							alt="Jati Sri Pamungkas"
							className="cursor-pointer"
						/>
					</Link>
					<div className="flex gap-8">
						<Button
							size="icon"
							className="bg-transparent shadow-none text-jati-3 p-2 cursor-pointer hover:bg-transparent active:bg-jati-3 active:text-white"
						>
							<MoonStar className="!w-7 !h-7" />
						</Button>
						<Button
							variant="ghost"
							size="icon"
							onClick={() => setIsShow(!isShow)}
							className="p-2 active:bg-jati-5 active:text-white cursor-pointer"
						>
							<Menu className="!w-7 !h-7" />
						</Button>
					</div>
				</div>
				<nav className="flex items-center gap-10">
					<Button
						size="icon"
						className="bg-transparent text-jati-3 p-2 cursor-pointer hover:bg-transparent hidden"
					>
						<MoonStar className="!w-7 !h-7" />
					</Button>
					<ListHoverNavbar
						listHoverNavbar={["Profile", "Skills", "Education", "Project", "Contact"]}
						isHeader={true}
					/>
				</nav>
			</header>
		</>
	);
};

export default Header;
