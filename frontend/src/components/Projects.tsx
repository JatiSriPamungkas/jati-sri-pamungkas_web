import ProjectCard from "./ProjectCard";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

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
	const API_URL =
		process.env.NODE_ENV === "production"
			? "/api/projects"
			: "http://localhost:3000/api/projects";

	const fetchProjects = useCallback(async () => {
		try {
			const response = await axios.get(API_URL);
			setProjects(response.data); // Menyimpan data proyek ke state
		} catch (error) {
			console.error("Gagal mengambil data proyek:", error);
		}
	}, [API_URL]);

	useEffect(() => {
		fetchProjects();
	}, [fetchProjects]);

	return (
		<>
			<div id="project">
				<h1 className="pt-16 flex justify-center text-3xl font-bold gap-2 tracking-wider">
					Personal{" "}
					<span className="px-2 py-1 bg-jati-1 rounded-[5px] text-white">Projects</span>
				</h1>

				<div className="grid p-4">
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
				</div>
			</div>
		</>
	);
};

export default Projects;
