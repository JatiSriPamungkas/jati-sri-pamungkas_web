import JattLogo from "../assets/jatt-light-no-bg.png";
import { Button } from "./ui/button";
import { Menu, MoonStar, X } from "lucide-react";
import ListHoverNavbar from "./ListHoverNavbar";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
	const [isShow, setIsShow] = useState<boolean>(false);

	const handelOnClick = (setOnClick: boolean) => {
		setIsShow(setOnClick);
	};

	return (
		<>
			<header
				className={`${
					isShow ? "h-105 min-[769px]:h-30" : "h-30"
				} sticky top-0 bg-transparent backdrop-blur-lg border-b-2 flex flex-col justify-between px-8 py-6 transition-all duration-500 overflow-hidden z-10 min-[769px]:border-none min-[769px]:flex-row min-[769px]:m-auto min-[769px]:w-[78%]`}
			>
				<div className="w-full flex justify-between items-center mb-8 min-[769px]:mb-0">
					<Link to="/">
						<img
							src={JattLogo}
							width={75}
							alt="Jati Sri Pamungkas"
							className="cursor-pointer"
						/>
					</Link>
					<div className="flex gap-8 min-[769px]:hidden">
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
							className="p-2 active:bg-jati-5 shadow-none active:text-white cursor-pointer"
						>
							{isShow ? <X className="!w-7 !h-7" /> : <Menu className="!w-7 !h-7" />}
						</Button>
					</div>
				</div>
				<nav className="flex items-center gap-10">
					<Button
						size="icon"
						className="bg-transparent shadow-none text-jati-3 p-2 cursor-pointer hover:bg-transparent active:bg-jati-3 active:text-white max-[769px]:hidden"
					>
						<MoonStar className="!w-7 !h-7" />
					</Button>
					<ListHoverNavbar
						listHoverNavbar={["Profile", "Skills", "Education", "Project", "Contact"]}
						isHeader={true}
						toogleFunc={handelOnClick}
					/>
				</nav>
			</header>
		</>
	);
};

export default Header;
