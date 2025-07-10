const Education = () => {
	return (
		<>
			<div className="grid grid-cols-2 mt-40">
				<div>
					<h1 id="education" className="text-5xl font-bold tracking-wider">
						<span className="bg-jati-1 rounded-[5px] text-white">Edu</span>cation
					</h1>

					<div className="mt-12 flex flex-col w-150 h-60 border-2 items-center justify-evenly font-semibold text-2xl rounded-[10px] shadow-[4px_4px_15px_3px_rgba(0,0,0,0.25)]">
						<h1 className="text-4xl text-jati-1 font-bold">2020 -2023</h1>
						<h1>SMA Negeri 1 Simo</h1>
						<h1>93,33 last average point exam</h1>
					</div>
					<div className="mt-12 flex flex-col w-150 h-60 border-2 items-center justify-evenly font-semibold text-2xl rounded-[10px] shadow-[4px_4px_15px_3px_rgba(0,0,0,0.25)]">
						<h1 className="text-4xl text-jati-1 font-bold">2023 - NOW</h1>
						<h1>University of AMIKOM Yogyakarta</h1>
						<h1>Faculty of Computer Science</h1>
						<h1>GPA 3.97 out of 3 semester</h1>
					</div>
				</div>

				<div>
					<h1 className="text-5xl font-bold tracking-wider">
						<span className="bg-jati-1 rounded-[5px] text-white">Organiz</span>ation
					</h1>
					<div className="mt-12 flex flex-col w-150 h-60 border-2 items-center justify-evenly font-semibold text-2xl rounded-[10px] shadow-[4px_4px_15px_3px_rgba(0,0,0,0.25)]">
						<h1 className="text-4xl text-jati-1 font-bold">2020 -2023</h1>
						<h1>English Fun Club (EFC)</h1>
					</div>
				</div>
			</div>
		</>
	);
};

export default Education;
