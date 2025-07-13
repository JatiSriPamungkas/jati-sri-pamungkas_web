const path = require("path");
require("dotenv").config({
	path: path.resolve(__dirname, "..", ".env.development.local"),
});

const skills = [
	{
		title: "HTML",
		description: "A robust structured to start building website",
		src: `${process.env.BASE_URL}/assets/HTML5.png`,
	},
	{
		title: "CSS",
		description: "Simple style to start decorating the website",
		src: `${process.env.BASE_URL}/assets/CSS3.png`,
	},
	{
		title: "Javascript",
		description: "A genius way to make the website more interactive",
		src: `${process.env.BASE_URL}/assets/JavascriptES6.png`,
	},
	{
		title: "Tailwind",
		description: "Make style of the website more light with utility class",
		src: `${process.env.BASE_URL}/assets/TailwindCSS.png`,
	},
	{
		title: "React",
		description: "Library for javascript using components model",
		src: `${process.env.BASE_URL}/assets/React.png`,
	},
	{
		title: "Express JS",
		description: "Framework for Node JS that runs everything seamlessly",
		src: `${process.env.BASE_URL}/assets/ExpressJS.png`,
	},
	{
		title: "Node JS",
		description: "A runtime environment for javascript",
		src: `${process.env.BASE_URL}/assets/NodeJS.png`,
	},
	{
		title: "PostgreSQL",
		description: "Open-source database that really famous on community",
		src: `${process.env.BASE_URL}/assets/PostgreSQL.png`,
	},
	{
		title: "Github & Git",
		description: "Online storage and version control to track the project",
		src: `${process.env.BASE_URL}/assets/Github_Git.png`,
	},
];

const educations = [
	{
		institution: "Universitas AMIKOM Yogyakarta",
		major: "S1 - Informatika",
		period: "2023 - NOW",
	},
	{
		institution: "SMA Negeri 1 Simo",
		major: "MIPA",
		period: "2020 - 2023",
	},
	{
		institution: "SMPIT Al-Falaah Simo",
		major: "Quran & Hadits",
		period: "2017 - 2020",
	},
];

const projects = [
	{
		title: "Task Master",
		image: `${process.env.BASE_URL}/assets/task-master.png`,
		description:
			"Task Master is a minimalistic and user-friendly task management application designed to help users organize and prioritize their daily activities with ease. Unlike gamified versions, Task Master focuses on simplicity, clarity, and efficiency.",
		tech: ["React", "Express.js", "MySQL"],
		link: "#",
	},
	{
		title: "Hunter Rise",
		image: `${process.env.BASE_URL}/assets/hunter-rise.png`,
		description:
			"Hunter Rise is a gamified task management app designed to make your daily productivity feel like leveling up in a fantasy RPG world. Inspired by the popular manhwa Solo Leveling, you don't just complete tasks — you complete quests as a Hunter.",
		tech: ["Next.js", "Express.js", "MySQL", "Vercel"],
		link: "https://hunter-rise.vercel.app",
	},
];

module.exports = { educations, skills, projects };
