import Profile from "@/components/Profile";
import Header from "@/components/Header";
import Skills from "@/components/Skills";

const HomePage = () => {
	return (
		<>
			<div className="w-[75%] min-h-[4096px] mx-auto font-montserrat text-jati-3">
				<Header />
				<Profile />
				<Skills />
			</div>
		</>
	);
};

export default HomePage;
