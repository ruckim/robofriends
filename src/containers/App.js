import React from "react"
import {connect} from "react-redux";
import "../components/MainPage.css"
import {requestRobots, setSearchField} from "../actions";
import MainPage from "../components/MainPage";

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,
    }
};

const mapDispatchToProps = (dispatch) => ({
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
});

class App extends React.Component {
    render() {
        return(<MainPage {...this.props}/>)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);