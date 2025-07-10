const HoverItem = ({ children }: { children: string }) => {
	const getPathName = ({ pathName }: { pathName: string }) => {
		const pathNameToLower = pathName.toLowerCase();

		const path = "#" + pathNameToLower;

		return path;
	};

	return (
		<>
			<li className="cursor-pointer underline-offset-16 decoration-jati-1 hover:text-jati-1 hover:underline">
				<a href={getPathName({ pathName: children })}>{children}</a>
			</li>
		</>
	);
};

export default HoverItem;
