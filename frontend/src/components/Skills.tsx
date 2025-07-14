import SkillCard from "./SkillCard";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { motion } from "framer-motion";

type SkillsSchema = {
	id: number;
	title: string;
	description: string;
	src: string;
};

const Skills = () => {
	const [skills, setSkills] = useState<SkillsSchema[]>([]);

	const fetchSkills = useCallback(async () => {
		try {
			const response = await axios.get(
				"https://jati-sri-pamungkasweb-production.up.railway.app/api/skills"
			);
			setSkills(response.data);
		} catch (error) {
			console.error("Gagal mengambil data skill:", error);
		}
	}, []);

	useEffect(() => {
		fetchSkills();
	}, [fetchSkills]);

	return (
		<>
			<div id="skills" className="pt-16 scroll-mt-20">
				<h1 className="flex justify-center text-3xl font-bold gap-2 tracking-wider min-[1025px]:text-5xl">
					My <span className="bg-jati-1 px-2 py-1 rounded-[5px] text-white">Skills</span>
				</h1>

				<motion.div
					className="mt-16 grid gap-16 min-[769px]:grid-cols-2 min-[1025px]:grid-cols-3"
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
					viewport={{ once: true, amount: 0.2 }}
				>
					{skills.map((skill) => {
						return (
							<SkillCard key={skill.id} src={skill.src} title={skill.title}>
								{skill.description}
							</SkillCard>
						);
					})}
				</motion.div>
			</div>
		</>
	);
};

export default Skills;
