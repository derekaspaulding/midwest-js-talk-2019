import React from "react";

// live-code-helper:include:start
class Counter extends React.Component {
  state = {
    count: 0
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <button 
					onClick={() => this.setState({ count: count + 1 })}
				>
					🔼
				</button>
				<div>{count}</div>
        <button 
					onClick={() => this.setState({ count: count - 1 })}
				>
					🔽
				</button>
      </div>
    );
  }
}
// live-code-helper:include:end

export default Counter;
