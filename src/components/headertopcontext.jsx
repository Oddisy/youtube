// MyContext.js
import React, {createContext, useState} from "react";

export const HeaderTopContext = createContext();

const MyProvider = ({children}) => {
	const [show, setShow] = useState(false);

	return (
		<HeaderTopContext.Provider value={[show, setShow]}>
			{children}
		</HeaderTopContext.Provider>
	);
};

export default MyProvider;
