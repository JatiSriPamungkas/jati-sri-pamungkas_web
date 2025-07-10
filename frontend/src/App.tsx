import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFound";

function App() {
	return (
		<>
			<div className="bg-[#FFFCF5]">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/*" element={<NotFoundPage />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
