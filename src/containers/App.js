import React from "react"
import {connect} from "react-redux";
import CardList from "../components/CardList";
import {SearchBox} from "../components/SearchBox";
import "./App.css"
import {Scroll} from "../components/Scroll";
import {ErrorBoundry} from "../components/ErrorBoundry";
import {requestRobots, setSearchField} from "../actions";
import Header from "../components/Header";

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

    componentDidMount() {
        this.props.onRequestRobots()
    }

    render() {
        const {robots, onSearchChange, searchField, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        });
        if (isPending) {
            return <h1 className={"tc"}>Loading</h1>
        } else {
            return (
                <div className={"tc"}>
                    <Header/>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);