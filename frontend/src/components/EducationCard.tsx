type EducationCardSchema = {
	period: string;
	institution: string;
	major: string;
};

const EducationCard = ({ period, institution, major }: EducationCardSchema) => {
	return (
		<div className="mt-12 flex flex-col w-full h-60 p-4 border-2 items-center justify-evenly font-semibold text-2xl rounded-[10px] shadow-[4px_4px_15px_3px_rgba(0,0,0,0.25)]">
			<h1 className="font-bold text-2xl text-jati-1 text-center">{period}</h1>
			<p className="text-lg text-center">{institution}</p>
			<p className="text-lg text-center">{major}</p>
		</div>
	);
};

export default EducationCard;
