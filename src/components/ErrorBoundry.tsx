import React from "react"

export class ErrorBoundry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return (<h1>Hoops! It's not good.</h1>)
        } else {
            return this.props.children
        }
    }
}