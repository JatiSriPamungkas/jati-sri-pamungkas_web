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
	const API_URL =
		process.env.NODE_ENV === "production" ? "/api/skills" : "http://localhost:3000/api/skills";

	const fetchSkills = useCallback(async () => {
		try {
			const response = await axios.get(API_URL);
			setSkills(response.data);
		} catch (error) {
			console.error("Gagal mengambil data skill:", error);
		}
	}, [API_URL]);

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
