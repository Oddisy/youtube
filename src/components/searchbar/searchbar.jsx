import React from "react";
import {hamburger} from "../exports";
const SearchBar = () => {
	return (
		<span className=" relative h-full flex rounded-tl-2xl rounded-bl-2xl items-center">
			<span className="absolute">{/* <img src={hamburger} alt="" /> */}</span>
			<span className="h-full">
				<input
					type="text"
					placeholder="Search"
					className=" h-full rounded-tl-[2rem] rounded-bl-[2rem] flex items-center p-6 text-[1.3rem]     w-[598px]"
				/>
			</span>
			<span className=" h-full flex items-center justify-center w-20 rounded-tr-[2rem]  rounded-br-[2rem] border-[0.01px] border-gray-300 bg-slate-100">
				<img src={hamburger} alt="" />
			</span>
		</span>
	);
};
export default SearchBar;
