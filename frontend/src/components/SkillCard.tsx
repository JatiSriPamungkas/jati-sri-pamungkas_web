import { ChevronRight } from "lucide-react";

const SkillCard = ({ src, title, children }: { src: string; title: string; children: string }) => {
	return (
		<>
			<div className="relative flex flex-col items-center w-full h-75 shadow-[4px_4px_15px_3px_rgba(0,0,0,0.25)] rounded-[10px] bg-[#FFFBF3] pb-16">
				<img src={src} alt="Skill Logo" className="pt-14 w-[125px]" />
				<div className="absolute bottom-0 w-full flex items-end justify-between p-8 h-[80%] bg-gradient-to-t from-black/50  to-white/0 rounded-[10px] text-white">
					<div className="w-[90%] flex flex-col gap-4">
						<h1 className="font-bold text-2xl">{title}</h1>
						<p className="text-lg">{children}</p>
					</div>
					<ChevronRight className="!w-10 !h-10" />
				</div>
			</div>
		</>
	);
};

export default SkillCard;
