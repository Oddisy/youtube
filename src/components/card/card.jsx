import React from "react";

const Card = ({src, title, author, status}) => {
	return (
		<div className=" h-80 ml-20  w-[80%]">
			<img
				src={src}
				className=" rounded-lg w-full object-cover h-44"
				alt="bjk"
			/>
			<div className="">
				<h3 className=" font-bold text-lg">{title}</h3>
				<h4 className="text-gray-400 text-lg">{author}</h4>
				<h4 className="bg-gray-100 p-2 h-6 flex items-center w-[7rem]">
					{status}
				</h4>
			</div>
		</div>
	);
};
export default Card;
