import React from "react"

export class ErrorBoundry extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error: any, errorInfo: any) {
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