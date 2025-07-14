import JatiSriPamungkas from "../assets/jati-with-circle.png";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import ActionButton from "./ActionButton";
import { Phone } from "lucide-react";
import { IoStar } from "react-icons/io5";
import { motion } from "framer-motion";

const Profile = () => {
	return (
		<>
			<main className="mt-6 flex flex-col gap-8 min-[1025px]:mt-28">
				<div className="flex flex-col justify-between min-[769px]:flex-row min-[769px]:items-center">
					<div className=" flex flex-col justify-evenly gap-8 min-[1025px]:w-[50%]">
						<motion.div
							className="min-[1025px]:hidden"
							initial={{ opacity: 0, x: 100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
							viewport={{ once: true, amount: 0.2 }}
						>
							<img src={JatiSriPamungkas} alt="Jati Sri Pamungkas" />
						</motion.div>
						<motion.h1
							id="profile"
							className="font-bold text-4xl leading-tight scroll-mt-999 min-[1025px]:text-6xl"
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
							viewport={{ once: true, amount: 0.2 }}
						>
							Hey There,{" "}
							<span className="text-jati-1">
								<br />
								I'm Jati
							</span>
						</motion.h1>
						<motion.p
							className="mt-2 leading-relaxed text-[14px] min-[1025px]:text-[18px]"
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
							viewport={{ once: true, amount: 0.2 }}
						>
							My name is Jati Sri Pamungkas, I&apos;m so interest with programming
							world. It all started with a random TikTok video that simply explained
							programming. I never thought that moment would lead me here. What began
							as curiosity turned into a strong passion for Backend Engineering and
							Blockchain Development. I never imagined myself on this path, but now
							I&apos;ve found direction and purpose. I know where I&apos;m going, and
							I&apos;m set on becoming the kind of person I once looked up to. The
							journey&apos;s not over yet, but I&apos;m proud of how far I&apos;ve
							come.
						</motion.p>
						<div className="flex flex-col gap-8 min-[1025px]:flex-row">
							<motion.div
								initial={{ opacity: 0, x: -100 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
								viewport={{ once: true, amount: 0.2 }}
							>
								<ActionButton type="cta">
									Contact Me <Phone />
								</ActionButton>
							</motion.div>
							<motion.div
								className="flex justify-around gap-4"
								initial={{ opacity: 0, y: 100 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
								viewport={{ once: true, amount: 0.2 }}
							>
								<ActionButton type="non-cta">
									<FaLinkedinIn className="!w-7 !h-7" />
								</ActionButton>
								<ActionButton type="non-cta">
									<FaGithub className="!w-7 !h-7" />
								</ActionButton>
								<ActionButton type="non-cta">
									<FaInstagram className="!w-7 !h-7" />
								</ActionButton>
							</motion.div>
						</div>
					</div>

					<div>
						<motion.img
							src={JatiSriPamungkas}
							alt="Jati Sri Pamungkas"
							className="hidden min-[1025px]:block"
							initial={{ opacity: 0, x: 100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
							viewport={{ once: true, amount: 0.2 }}
						/>
					</div>
				</div>

				<div className="w-full grid grid-cols-1 gap-8 justify-between mt-8 mb-16 min-[1025px]:grid-cols-3">
					<motion.div
						className="ml-4 flex font-bold text-lg gap-12 items-center min-[1025px]:text-2xl min-[1025px]:ml-0 min-[1025px]:gap-6"
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
						viewport={{ once: true, amount: 0.2 }}
					>
						<span className="text-5xl min-[1025px]:text-7xl">2+</span>Years of <br />{" "}
						Programming
					</motion.div>
					<motion.div
						className="ml-4 flex font-bold text-lg gap-6 items-center min-[1025px]:text-2xl min-[1025px]:ml-0"
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
						viewport={{ once: true, amount: 0.2 }}
					>
						<span className="text-5xl min-[1025px]:text-7xl">10+</span>Completed Project{" "}
						<br /> on Github
					</motion.div>
					<motion.div
						className="flex flex-col items-center justify-between w-full py-2 border-2 border-jati-1 font-bold text-2xl rounded-[7px]"
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
						viewport={{ once: true, amount: 0.2 }}
					>
						Lab Assistant
						<div className="flex flex-col-reverse justify-center items-center gap-2 text-[20px] text-jati-1">
							<div className="flex gap-4">
								{[...Array(4)].map((_, i) => {
									return <IoStar key={i} />;
								})}
							</div>
							<h1>B Grade</h1>
						</div>
					</motion.div>
				</div>
			</main>
		</>
	);
};

export default Profile;
