import React, {useContext} from "react";
import {mainItemList, Card} from "../exports";
import { HeaderTopContext } from "../headertopcontext";
const Main = () => {
	const [show] = useContext(HeaderTopContext)
	return (
		<div className="w-[96%] place-content-start mx-auto h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   mt-20">
			{mainItemList.map((main, index) => (
				// each card to render videos
				<Card
					key={index}
					src={main.src}
					title={main.title}
					author={main.author}
					status={main.status}
				/>
			))}
		</div>
	);
};

export default Main;
