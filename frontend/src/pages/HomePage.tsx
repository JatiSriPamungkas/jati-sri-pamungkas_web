import JattLogo from "../assets/jatt-light.svg";
import JatiSriPamungkas from "../assets/jati-with-circle.png";
import { MoonStar, Phone } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import HoverItem from "@/components/HoverItem";
import ActionButton from "@/components/ActionButton";

const HomePage = () => {
	return (
		<>
			<div className="w-[75%] mx-auto font-montserrat text-jati-3">
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
						<ul className="flex gap-8 font-semibold text-[18px]">
							<HoverItem>Profile</HoverItem>
							<HoverItem>Skills</HoverItem>
							<HoverItem>Education</HoverItem>
							<HoverItem>Project</HoverItem>
							<HoverItem>Contact</HoverItem>
						</ul>
					</nav>
				</header>

				<main className="mt-6 flex flex-col gap-8">
					<div className="flex justify-between">
						<div className="w-[50%] flex flex-col justify-evenly gap-8">
							<h1 id="#profile" className="font-bold text-6xl">
								Hey There,{" "}
								<span className="text-jati-1">
									<br />
									I'm Jati
								</span>
							</h1>
							<p className="mt-2 leading-relaxed text-[18px]">
								My name is Jati Sri Pamungkas, I&apos;m so interest with programming
								world. It all started with a random TikTok video that simply
								explained programming. I never thought that moment would lead me
								here. What began as curiosity turned into a strong passion for
								Backend Engineering and Blockchain Development. I never imagined
								myself on this path, but now &apos;ve found direction and purpose. I
								know where I&apos;m going, and I&apos;m set on becoming the kind of
								person I once looked up to. The journey&apos;s not over yet, but
								I&apos;m proud of how far I&apos;ve come.
							</p>
							<div className="flex items-center gap-8">
								<ActionButton type="cta">
									Contact Me <Phone />
								</ActionButton>
								<ActionButton type="non-cta">
									<FaLinkedinIn className="!w-7 !h-7" />
								</ActionButton>
								<ActionButton type="non-cta">
									<FaGithub className="!w-7 !h-7" />
								</ActionButton>
								<ActionButton type="non-cta">
									<FaInstagram className="!w-7 !h-7" />
								</ActionButton>
							</div>
						</div>

						<div>
							<img src={JatiSriPamungkas} alt="Jati Sri Pamungkas" />
						</div>
					</div>

					<div className="flex justify-between mt-16">
						<div className="flex font-bold text-2xl gap-6 items-center">
							<span className="text-7xl">2+</span>Years of <br /> Programming
						</div>
						<div className="flex font-bold text-2xl gap-6 items-center">
							<span className="text-7xl">10+</span>Completed Project <br /> on Github
						</div>
						<div className="flex flex-col items-center justify-between w-75 border-2 border-jati-1 font-bold text-2xl">
							Lab Assistant
							<div className="flex justify-center gap-2 text-[20px] text-jati-1">
								<IoStar />
								<IoStar />
								<IoStar />
								<IoStar /> <h1>B Grade</h1>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	);
};

export default HomePage;
