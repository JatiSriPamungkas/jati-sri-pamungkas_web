import SkillCard from "./SkillCard";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

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
			<div id="skills" className="pt-16">
				<h1 className="flex justify-center text-3xl font-bold gap-2 tracking-wider">
					My <span className="bg-jati-1 px-2 py-1 rounded-[5px] text-white">Skills</span>
				</h1>

				<div className="mt-16 grid gap-16">
					{skills.map((skill) => {
						return (
							<SkillCard key={skill.id} src={skill.src} title={skill.title}>
								{skill.description}
							</SkillCard>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Skills;
