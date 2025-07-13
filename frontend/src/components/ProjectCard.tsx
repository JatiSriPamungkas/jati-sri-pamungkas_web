import { ExternalLink } from "lucide-react";
import TechStack from "./TechStack";

type ProjectCardSchema = {
	urlImage: string;
	title: string;
	children: React.ReactNode;
	techTags: string[];
};

const ProjectCard = ({ urlImage, title, children, techTags }: ProjectCardSchema) => {
	return (
		<>
			<div className="my-8 flex flex-col gap-8 p-8 w-full min-h-150 rounded-[10px] shadow-[4px_4px_15px_3px_rgba(0,0,0,0.25)]">
				<img src={urlImage} alt="Task Master" className="rounded-[10px]" />
				<div className="flex items-center justify-between">
					<h1 className="font-bold text-2xl ">{title}</h1>
					<ExternalLink className="!w-7 !h-7 text-jati-1" />
				</div>
				<p>{children}</p>
				<TechStack techTags={techTags} />
			</div>
		</>
	);
};

export default ProjectCard;
