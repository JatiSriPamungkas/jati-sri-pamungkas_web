import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import EducationCard from "./EducationCard";

type EducationSchema = {
	id: number;
	institution: string;
	major: string;
	period: string;
};

const Education = () => {
	const [educationHistory, setEducationHistory] = useState<EducationSchema[]>([]);
	const [organizationHistory, setOrganizationHistory] = useState<EducationSchema[]>([]);

	const API_URL_EDUCATION =
		process.env.NODE_ENV === "production"
			? "/api/education"
			: "https://jati-sri-pamungkasweb-production.up.railway.app/api/education";

	const API_URL_ORGANIZATIONS =
		process.env.NODE_ENV === "production"
			? "/api/organizations"
			: "https://jati-sri-pamungkasweb-production.up.railway.app/api/organizations";

	const fetchEducationHistory = useCallback(async () => {
		try {
			const response = await axios.get(API_URL_EDUCATION);
			setEducationHistory(response.data);
		} catch (error) {
			console.error("Gagal mengambil data pendidikan:", error);
		}
	}, [API_URL_EDUCATION]);

	const fetchOrganizationHistory = useCallback(async () => {
		try {
			const response = await axios.get(API_URL_ORGANIZATIONS);
			console.log(response.data);
			setOrganizationHistory(response.data);
		} catch (error) {
			console.error("Gagal mengambil data pendidikan:", error);
		}
	}, [API_URL_ORGANIZATIONS]);

	useEffect(() => {
		fetchEducationHistory();
		fetchOrganizationHistory();
	}, [fetchEducationHistory, fetchOrganizationHistory]);

	return (
		<>
			<div id="education" className="pt-16 grid gap-16 mb-16">
				<div>
					<h1 className="text-3xl font-bold tracking-wider">
						<span className="bg-jati-1 rounded-[5px] text-white">Edu</span>
						cation
					</h1>

					{educationHistory.map((education) => {
						return (
							<EducationCard
								key={education.id}
								period={education.period}
								institution={education.institution}
								major={education.major}
							/>
						);
					})}
				</div>

				<div className="flex flex-col">
					<h1 className="text-3xl font-bold tracking-wider">
						<span className="bg-jati-1 rounded-[5px] text-white">Organiz</span>
						ation
					</h1>
					{organizationHistory.map((organization) => {
						return (
							<EducationCard
								key={organization.id}
								period={organization.period}
								institution={organization.institution}
								major={organization.major}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Education;
