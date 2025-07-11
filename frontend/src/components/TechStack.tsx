const TechStack = ({ techTags }: { techTags: string[] }) => {
	return (
		<>
			<div className="flex gap-4 pb-2">
				{techTags.map((tag, i) => {
					return (
						<div
							key={i}
							className="min-w-32 px-2 py-1 text-center border-2 border-jati-1 bg-jati-4 text-jati-1 font-semibold rounded-full"
						>
							{tag}
						</div>
					);
				})}
			</div>
		</>
	);
};

export default TechStack;
