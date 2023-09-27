import React, {useContext, useEffect, useRef} from "react";
import {HeaderTopContext} from "../headertopcontext";

const HiddenSideBar = () => {
	const [show, setShow] = useContext(HeaderTopContext);
	const ref = useRef()
	useEffect(()=>{
		document.body.addEventListener('click', (e) => {
			
			if(e.target.contains(ref.current)){
setShow(()=>(!show))
		}
		})}
	), []
	console.log(show);
	return (
		<div>
			<div ref={ref}
				onClick={() => !show}
				className=" absolute top-0 left-0 w-full h-screen bg-black bg-opacity-50"
			></div>
			<div className="   h-screen overflow-y-scroll w-[240px] bg-white absolute top-0 left-0"></div>
		</div>
	);
};

export default HiddenSideBar;
