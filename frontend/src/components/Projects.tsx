import ProjectCard from "./ProjectCard";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { motion } from "framer-motion";

type ProjectsSchema = {
	id: number;
	title: string;
	image: string;
	description: string;
	tech: string[];
	link: string;
};

const Projects = () => {
	const [projects, setProjects] = useState<ProjectsSchema[]>([]);

	const fetchProjects = useCallback(async () => {
		try {
			const response = await axios.get(
				"https://jati-sri-pamungkasweb-production.up.railway.app/api/projects"
			);
			setProjects(response.data); // Menyimpan data proyek ke state
		} catch (error) {
			console.error("Gagal mengambil data proyek:", error);
		}
	}, []);

	useEffect(() => {
		fetchProjects();
	}, [fetchProjects]);

	return (
		<>
			<div id="project" className="scroll-mt-20">
				<h1 className="pt-16 flex justify-center text-3xl font-bold gap-2 tracking-wider min-[1025px]:text-5xl">
					Personal{" "}
					<span className="px-2 py-1 bg-jati-1 rounded-[5px] text-white">Projects</span>
				</h1>

				<motion.div
					className="grid min-[1025px]:grid-cols-2 min-[1025px]:gap-16"
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true, amount: 0.2 }}
				>
					{projects.map((project) => {
						return (
							<ProjectCard
								key={project.id}
								urlImage={project.image}
								title={project.title}
								techTags={project.tech}
							>
								{project.description}
							</ProjectCard>
						);
					})}
				</motion.div>
			</div>
		</>
	);
};

export default Projects;
