type listHoverNavbarSchema = {
	listHoverNavbar: string[];
	isHeader: boolean;
};

const ListHoverNavbar = ({ listHoverNavbar, isHeader }: listHoverNavbarSchema) => {
	const getPathName = ({ pathName }: { pathName: string }) => {
		const pathNameToLower = pathName.toLowerCase();

		const path = "#" + pathNameToLower;

		return path;
	};

	return (
		<>
			<ul
				className={`flex flex-col ${
					isHeader ? "gap-8" : "gap-4"
				} font-semibold text-[18px] min-[769px]:flex-row min-[769px]:gap-12 min-[769px]:pl-6`}
			>
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
