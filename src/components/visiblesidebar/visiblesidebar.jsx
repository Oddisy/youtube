import React, { useContext } from "react";
import {VisibleSideComponent, sideContentList} from "../exports";
import { HeaderTopContext } from "../headertopcontext";

 
const VisibleSideBar = () => {
	// logic to display all visible sidebar
	const ShowSideBar = () => {
		return sideContentList.map((content, index) => (
			<VisibleSideComponent
				className=" w-full h-24 rounded-lg grid place-content-center text-black hover:bg-blue-300"
				imgClassName="flex justify-center"
				key={index}
				src={content.src}
				text={content.text}
			/>
		));
	};
	const [show] = useContext(HeaderTopContext)

	return (
		
		<aside>
			<div className=" fixed top-16 h-screen w-24 flex  flex-col gap-12 ">
				<div className=" text-sm">{show ? <p></p> :  ShowSideBar()  }</div>
			</div>
		</aside>
	);
};

export default VisibleSideBar;
