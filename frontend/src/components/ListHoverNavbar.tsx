type listHoverNavbarSchema = {
	listHoverNavbar: string[];
};

const ListHoverNavbar = ({ listHoverNavbar }: listHoverNavbarSchema) => {
	const getPathName = ({ pathName }: { pathName: string }) => {
		const pathNameToLower = pathName.toLowerCase();

		const path = "#" + pathNameToLower;

		return path;
	};

	return (
		<>
			<ul className="flex flex-col gap-8 font-semibold text-[18px]">
				{listHoverNavbar.map((list, i) => {
					return (
						<li
							key={i}
							className="cursor-pointer underline-offset-16 decoration-jati-1 hover:text-jati-1 hover:underline active:text-jati-1 active:underline transition-all"
						>
							<a href={getPathName({ pathName: list })}>{list}</a>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default ListHoverNavbar;
