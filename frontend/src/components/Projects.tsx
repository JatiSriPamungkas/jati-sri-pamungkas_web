import TaskMaster from "../assets/task-master.png";
import HunterRise from "../assets/hunter-rise.png";
import ProjectCard from "./ProjectCard";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

type ProjectsSchema = {
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
					<ProjectCard
						urlImage={TaskMaster}
						title="Task Master"
						techTags={["React", "Express JS", "MySQL"]}
					>
						Task Master is a minimalistic and user-friendly task management application
						designed to help users organize and prioritize their daily activities with
						ease. Unlike gamified versions, Task Master focuses on simplicity, clarity,
						and efficiency.
					</ProjectCard>
					<ProjectCard
						urlImage={HunterRise}
						title="Hunter Rise"
						techTags={["Next JS", "Express JS", "MySQL"]}
					>
						Hunter Rise is a gamified task management app designed to make your daily
						productivity feel like leveling up in a fantasy RPG world. Inspired by the
						popular manhwa Solo Leveling, you don&apos;t just complete tasks — you
						complete quests as a Hunter.
					</ProjectCard>

					{/* Praktikum */}
					{projects.map((item, index) => {
						return (
							<ProjectCard
								key={index}
								urlImage={item.link}
								title={item.title}
								techTags={item.tech}
							>
								{item.description}
							</ProjectCard>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Projects;
