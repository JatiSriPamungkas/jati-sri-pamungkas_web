import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import EducationCard from "./EducationCard";
import { motion } from "framer-motion";

type EducationSchema = {
	id: number;
	institution: string;
	major: string;
	period: string;
};

const Education = () => {
	const [educationHistory, setEducationHistory] = useState<EducationSchema[]>([]);
	const [organizationHistory, setOrganizationHistory] = useState<EducationSchema[]>([]);

	const fetchEducationHistory = useCallback(async () => {
		try {
			const response = await axios.get(
				"https://jati-sri-pamungkasweb-production.up.railway.app/api/education"
			);
			setEducationHistory(response.data);
		} catch (error) {
			console.error("Gagal mengambil data pendidikan:", error);
		}
	}, []);

	const fetchOrganizationHistory = useCallback(async () => {
		try {
			const response = await axios.get(
				"https://jati-sri-pamungkasweb-production.up.railway.app/api/organizations"
			);
			console.log(response.data);
			setOrganizationHistory(response.data);
		} catch (error) {
			console.error("Gagal mengambil data pendidikan:", error);
		}
	}, []);

	useEffect(() => {
		fetchEducationHistory();
		fetchOrganizationHistory();
	}, [fetchEducationHistory, fetchOrganizationHistory]);

	return (
		<>
			<div
				id="education"
				className="pt-16 grid gap-16 mb-16 min-[1025px]:grid-cols-2 scroll-mt-20 min-[1025px]:pt-32"
			>
				<div>
					<h1 className="text-3xl font-bold tracking-wider min-[1025px]:text-5xl">
						<span className="bg-jati-1 rounded-[5px] text-white">Edu</span>
						cation
					</h1>

					<motion.div
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
						viewport={{ once: true, amount: 0.2 }}
					>
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
					</motion.div>
				</div>

				<div className="flex flex-col">
					<h1 className="text-3xl font-bold tracking-wider min-[1025px]:text-5xl">
						<span className="bg-jati-1 rounded-[5px] text-white">Organiz</span>
						ation
					</h1>

					<motion.div
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
						viewport={{ once: true, amount: 0.2 }}
					>
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
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Education;
