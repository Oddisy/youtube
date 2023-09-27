import React from "react";
import {
	HeaderTop,
	HeaderBottom,
	headerBottomList,
	VisibleSideBar,
	Main,
} from "../../exports";
const Home = () => {
	return (
		<>
			<HeaderTop />
			<div className="flex">
				<VisibleSideBar />
				<div className="flex w-full flex-col">
					<span className="w-[100%] h-12 flex">
						{headerBottomList.map((bottom, index) => (
							<HeaderBottom key={index} list={bottom.list} />
						))}
					</span>
					<span className="w-full">
						<Main />
					</span>
				</div>
			</div>
		</>
	);
};

export default Home;
