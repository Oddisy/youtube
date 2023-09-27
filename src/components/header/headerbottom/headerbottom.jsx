import React, {useContext} from "react";
import {HeaderTopContext} from "../../headertopcontext";
const HeaderBottom = ({list}) => {
	const [show] = useContext(HeaderTopContext);
	console.log(show);
	return (
		<div
			className={
				show
					? " w-[100%] fixed left-24 top-16 h-10 bg-gray-500 flex justify-center -z-[1]"
					: "w-[100%] fixed left-24 top-16 h-10 bg-red-500 flex justify-center"
			}
		>
			{list}
		</div>
	);
};
export default HeaderBottom;
