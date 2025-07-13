import JatiSriPamungkas from "../assets/jati-with-circle.png";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import ActionButton from "./ActionButton";
import { Phone } from "lucide-react";
import { IoStar } from "react-icons/io5";

const Profile = () => {
	return (
		<>
			<main className="mt-6 flex flex-col gap-8">
				<div className="flex flex-col justify-between">
					<div className=" flex flex-col justify-evenly gap-8">
						<div className="min-[426px]:hidden">
							<img
								src={JatiSriPamungkas}
								alt="Jati Sri Pamungkas"
								className="sm:hidden"
							/>
						</div>
						<h1 className="font-bold text-4xl leading-tight">
							Hey There,{" "}
							<span className="text-jati-1">
								<br />
								I'm Jati
							</span>
						</h1>
						<p className="mt-2 leading-relaxed text-[14px]">
							My name is Jati Sri Pamungkas, I&apos;m so interest with programming
							world. It all started with a random TikTok video that simply explained
							programming. I never thought that moment would lead me here. What began
							as curiosity turned into a strong passion for Backend Engineering and
							Blockchain Development. I never imagined myself on this path, but now
							I&apos;ve found direction and purpose. I know where I&apos;m going, and
							I&apos;m set on becoming the kind of person I once looked up to. The
							journey&apos;s not over yet, but I&apos;m proud of how far I&apos;ve
							come.
						</p>
						<div className="flex flex-col gap-8">
							<ActionButton type="cta">
								Contact Me <Phone />
							</ActionButton>
							<div className="flex justify-around gap-4">
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
					</div>

					<div>
						<img
							src={JatiSriPamungkas}
							alt="Jati Sri Pamungkas"
							className="hidden sm:block"
						/>
					</div>
				</div>

				<div className="flex flex-col gap-8 justify-between mt-8 mb-16">
					<div className="ml-4 flex font-bold text-lg gap-12 items-center">
						<span className="text-5xl">2+</span>Years of <br /> Programming
					</div>
					<div className="ml-4 flex font-bold text-lg gap-6 items-center">
						<span className="text-5xl">10+</span>Completed Project <br /> on Github
					</div>
					<div className="flex flex-col items-center justify-between w-full py-2 border-2 border-jati-1 font-bold text-2xl rounded-[7px]">
						Lab Assistant
						<div className="flex flex-col-reverse justify-center items-center gap-2 text-[20px] text-jati-1">
							<div className="flex gap-4">
								{[...Array(4)].map((_, i) => {
									return <IoStar key={i} />;
								})}
							</div>
							<h1>B Grade</h1>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Profile;
