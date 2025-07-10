import { Link } from "react-router";

const HoverItem = ({ children }: { children: string }) => {
	const getPathName = ({ pathName }: { pathName: string }) => {
		const pathNameToLower = pathName.toLowerCase();

		const path = "#" + pathNameToLower;

		console.log(path);

		return path;
	};

	return (
		<>
			<li className="cursor-pointer underline-offset-16 decoration-jati-1 hover:text-jati-1 hover:underline">
				<Link to={getPathName({ pathName: children })}>{children}</Link>
			</li>
		</>
	);
};

export default HoverItem;
