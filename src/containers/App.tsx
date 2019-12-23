import React from "react"
import {connect} from "react-redux";
import "../components/MainPage.css"
import {requestRobots, setSearchField} from "../actions";
import MainPage, {IRobot} from "../components/MainPage";

const mapStateToProps = (state: any) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,
    }
};

const mapDispatchToProps = (dispatch: any) => ({
    onSearchChange: (event: any) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
});

interface IAppProps {
    searchField: string,
    robots: IRobot[],
    isPending: boolean,
    error: string,
    onSearchChange(event: React.SyntheticEvent<HTMLInputElement>): any
}

interface IAppState {
}

class App extends React.Component<IAppProps, IAppState> {
    render() {
        return(<MainPage {...this.props as any}/>)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);