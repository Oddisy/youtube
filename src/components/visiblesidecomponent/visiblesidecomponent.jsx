import React from "react";
const VisibleSideComponent = ({text, src, alt, className, imgClassName}) => {
	return (
		<div className={`${className}`}>
			<div className={`${imgClassName}`}>
				<img src={src} alt={alt} />
			</div>
			<p>{text}</p>
		</div>
	);
};
export default VisibleSideComponent;
