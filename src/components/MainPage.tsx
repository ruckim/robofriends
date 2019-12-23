import React from "react"
import CardList from "./CardList";
import {SearchBox} from "./SearchBox";
import "./MainPage.css"
import {Scroll} from "./Scroll";
import {ErrorBoundry} from "./ErrorBoundry";
import Header from "./Header";

export interface IRobot {
    name: string;
    email: string;
    id: number;
}

interface Props {
    isPending: boolean;
    onSearchChange(event: React.SyntheticEvent<HTMLInputElement>): void
    onRequestRobots: any; //TODO
    robots: IRobot[];
    searchField: string;
}

interface State {
}

interface IMainPage {
    componentDidMount: any; //TODO
    filterRobots: any; //TODO
    render: any; //TODO
}

class MainPage extends React.Component<Props, State> implements IMainPage {

    componentDidMount(): void {
        console.log(process.env.REACT_APP_SAY_HI)
        this.props.onRequestRobots()
    }

    filterRobots = () => {
        return this.props.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
        })
    }

    render(): JSX.Element {
        const { onSearchChange, isPending} = this.props;
        if (isPending) {
            return <h1 className={"tc"}>Loading</h1>
        } else {
            return (
                <div className={"tc"}>
                    <Header/>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={this.filterRobots()}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
        }
    }
}

export default MainPage;