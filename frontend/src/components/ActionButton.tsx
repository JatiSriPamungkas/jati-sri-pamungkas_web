import type React from "react";
import { Button } from "./ui/button";

const ActionButton = ({ type, children }: { type: string; children: React.ReactNode }) => {
	const getStyle = ({ typeStyle }: { typeStyle: string }) => {
		const styleString =
			typeStyle == "cta"
				? "w-40 h-15 bg-jati-1 cursor-pointer hover:bg-jati-5"
				: "w-15 h-15 bg-transparent text-jati-3 border-2 border-jati-3 cursor-pointer hover:bg-jati-5 hover:border-jati-5 hover:text-white";

		return styleString;
	};

	return (
		<>
			<Button className={getStyle({ typeStyle: type })}>{children}</Button>
		</>
	);
};

export default ActionButton;
