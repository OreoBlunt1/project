import React, { useState, useEffect } from "react";

function App() {
	const [data, setData] = useState([{}]);

	useEffect(() => {
		fetch("/admin")
			.then((res) => res.json())
			.then((data) => {
				console.log();
				setData(data);
			});
	}, []);
	return <div>{data.greeting}</div>;
}

export default App;
