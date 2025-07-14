import { motion } from "framer-motion";

const TestingPage = () => {
	const FadeIn = () => {
		return (
			<div>
				<motion.div
					initial={{ opacity: 0, y: 0 }}
					animate={{ opacity: 1, y: 100 }}
					transition={{ delay: 0.2 }}
				>
					Konten 1
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5 }}
				>
					Konten 2
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.7 }}
				>
					Konten 3
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.0 }}
				>
					Konten 4
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.0 }}
				>
					Konten 5
				</motion.div>
				<div className="h-screen"></div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true, amount: 0.2 }} // 👈 triknya di sini bre
					className="p-4 bg-green-500 text-white rounded-lg max-w-md mx-auto mt-32"
				>
					<h1 className="text-2xl font-bold">Scroll Reveal Animation 😎</h1>
					<p>Ini muncul pas lo scroll ke sini!</p>
				</motion.div>
			</div>
		);
	};

	return (
		<>
			<div>
				<FadeIn />
			</div>
		</>
	);
};

export default TestingPage;
