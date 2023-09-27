import React, {  useContext} from "react";
import {HiddenSideBar, SearchBar, hamburger, youtube} from "../../exports";
import {HeaderTopContext} from "../../headertopcontext";
const HeaderTop = () => {
	const [show, setShow] = useContext(HeaderTopContext);
	const toggleShow = () => {
		setShow(!show);
	};
	return (
		<div className=" fixed w-full h-16 flex items-center justify-between bg-gray-400 px-8">
			<div className="w-[10rem] flex justify-between items-center md:w-[15rem] lg:w-[20rem]">
				<span onClick={toggleShow}>
					<img src={hamburger} alt="hamburger" className=" w-6 h-4" />
				</span>
				<span className="flex items-center gap-2">
					<span className="">
						<img src={youtube} className="w-8  h-8" alt="youtube logo" />
					</span>
					<span className=" flex tracking-tighter font-sans font-medium text-[1.2rem] md:text-[1.6rem] lg:text-[2rem]">
						Youtube <sup className=" font-light">NG</sup>
					</span>
				</span>
				{show && <HiddenSideBar />}
			</div>
			{/* search bar and mic  */}
			<div className="h-[78%] flex items-center w-[51%] justify-between">
				{/* search bar starts */}
				<SearchBar />
				{/* search bar ends */}
				{/* mic */}
				<span className="h-[50px] w-[50px] justify-center rounded-[100%] bg-gray-300 flex items-center">
					<img src={hamburger} alt="" />
				</span>
			</div>
			<span className="flex w-[12%] justify-between">
				<span>
					<img src={hamburger} alt="" />
				</span>
				<span>
					<img src={hamburger} alt="" />
				</span>
				<span>
					<img src={hamburger} alt="" />
				</span>
			</span>
		</div>
	);
};

export default HeaderTop;
