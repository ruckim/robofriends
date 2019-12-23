import renderer from "react-test-renderer"
import React from 'react';
import MainPage from "./MainPage";

let wrapper;

beforeEach(() => {
    let mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: "",
        isPending: false
    }
    wrapper = renderer.create(<MainPage {...mockProps}/>)
});

it("renders main page without crashing", () => {
    expect(wrapper.toJSON()).toMatchSnapshot()
});

it("filters robots correctly", () => {
    let mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            name: "name",
            mail: "mail",
            id: "id"
        }],
        searchField: "a",
        isPending: false
    };
    expect(wrapper.getInstance().filterRobots()).toEqual([])
    expect(renderer.create(<MainPage {...mockProps2}/>).getInstance().filterRobots()).toEqual(mockProps2.robots);

})

it("filters robots correctly2", () => {
    let mockProps3 = {
        onRequestRobots: jest.fn(),
        robots: [{
            name: "name",
            mail: "mail",
            id: "id"
        }],
        searchField: "kkt",
        isPending: false
    };
    expect(wrapper.getInstance().filterRobots()).toEqual([])
    expect(renderer.create(<MainPage {...mockProps3}/>).getInstance().filterRobots()).toEqual([])

})