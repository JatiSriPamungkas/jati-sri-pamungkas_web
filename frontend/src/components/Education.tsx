import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import EducationCard from "./EducationCard";

type EducationSchema = {
	institution: string;
	major: string;
	period: string;
};

const Education = () => {
	const [educationHistory, setEducationHistory] = useState<EducationSchema[]>([]);

	const API_URL =
		process.env.NODE_ENV === "production"
			? "/api/education"
			: "http://localhost:3000/api/education";

	const fetchEducationHistory = useCallback(async () => {
		try {
			const response = await axios.get(API_URL);
			setEducationHistory(response.data);
		} catch (error) {
			console.error("Gagal mengambil data pendidikan:", error);
		}
	}, [API_URL]);

	useEffect(() => {
		fetchEducationHistory();
	}, [fetchEducationHistory]);

	return (
		<>
			<div id="education" className="pt-16 grid gap-16 mb-16">
				<div>
					<h1 className="text-3xl font-bold tracking-wider">
						<span className="bg-jati-1 rounded-[5px] text-white">Edu</span>
						cation
					</h1>

					{educationHistory.map((item, index) => {
						return (
							<div
								key={index}
								className="mt-12 flex flex-col w-150 h-60 border-2 items-center justify-evenly font-semibold text-2xl rounded-[10px] shadow-[4px_4px_15px_3px_rgba(0,0,0,0.25)]"
							>
								<h1 className="text-4xl text-jati-1 font-bold">
									{item.institution}
								</h1>
								<h1>{item.major}</h1>
								<h1>{item.period}</h1>
							</div>
						);
					})}

					<EducationCard
						period="2023 - NOW"
						institution="University of AMIKOM Yogyakarta"
						major="S1 - Informatics"
					/>
					<EducationCard
						period="2020 - 2023"
						institution="SMA Negeri 1 Simo"
						major="MIPA"
					/>
					<EducationCard
						period="2017 - 2020"
						institution="SMPIT Al-Falaah Simo"
						major="Quran & Hadits"
					/>
				</div>

				<div className="flex flex-col">
					<h1 className="text-3xl font-bold tracking-wider">
						<span className="bg-jati-1 rounded-[5px] text-white">Organiz</span>
						ation
					</h1>

					<EducationCard
						period="2023"
						institution="English Fun Club (EFC)"
						major="Security Department"
					/>
				</div>
			</div>
		</>
	);
};

export default Education;
