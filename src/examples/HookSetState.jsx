import React from "react";

// live-code-helper:include:start
const Counter = () => {
  const [count, setCount] = React.useState(0)

	return (
		<div>
			<button 
				onClick={() => setCount(count + 1)}
			>
				🔼
			</button>
			<div>{count}</div>
			<button 
				onClick={() => setCount(count - 1)}
			>
				🔽
			</button>
		</div>
	);
}
// live-code-helper:include:end

export default Counter;
