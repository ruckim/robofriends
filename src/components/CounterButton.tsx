import React from "react"

class CounterButton extends React.Component<any,any> {
    constructor(props: any){
        super(props);
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate(nextProps: any, nextState: any) {
        let propsUpdated = nextProps.color !== "red";
        let stateUpdated = nextState.count !== this.state.count;
        return propsUpdated || stateUpdated
    }

    updateCount = () => {
        this.setState((prevState: any)=>({count: prevState.count + 1}))
    };

    render() {
        return(
            <button id={"counter"} color={this.props.color} onClick={this.updateCount}>Count: {this.state.count}</button>
        )
    }
}

export default CounterButton;