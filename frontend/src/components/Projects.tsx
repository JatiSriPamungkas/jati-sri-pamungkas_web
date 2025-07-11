import TaskMaster from "../assets/task-master.png";
import HunterRise from "../assets/hunter-rise.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
	return (
		<>
			<div>
				<h1
					id="project"
					className="mt-40 flex justify-center text-5xl font-bold gap-2 tracking-wider"
				>
					Personal{" "}
					<span className="px-2 py-1 bg-jati-1 rounded-[5px] text-white">Projects</span>
				</h1>

				<div className="grid grid-cols-2 p-4">
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
				</div>
			</div>
		</>
	);
};

export default Projects;
