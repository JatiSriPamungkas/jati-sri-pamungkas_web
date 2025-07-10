import Profile from "@/components/Profile";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";

const HomePage = () => {
	return (
		<>
			<div className="w-[75%] min-h-[4096px] mx-auto font-montserrat text-jati-3">
				<Header />
				<Profile />
				<Skills />
				<Education />
				<Projects />
			</div>
		</>
	);
};

export default HomePage;
