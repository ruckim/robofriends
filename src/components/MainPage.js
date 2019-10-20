import React from "react"
import CardList from "../components/CardList";
import {SearchBox} from "../components/SearchBox";
import "./MainPage.css"
import {Scroll} from "../components/Scroll";
import {ErrorBoundry} from "../components/ErrorBoundry";
import Header from "../components/Header";

class MainPage extends React.Component {

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

export default MainPage;