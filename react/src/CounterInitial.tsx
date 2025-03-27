import React, { Component } from "react";

class Counter extends Component<{ initialCount: number }, { count: number }> {
    constructor(props: { initialCount: number }) {
        super(props);
        this.state = {
            count: props.initialCount,
        };
    }

    increment = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    decrement = () => {
        this.setState((prevState) => ({ count: prevState.count - 1 }));
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        );
    }
}

export default Counter;
