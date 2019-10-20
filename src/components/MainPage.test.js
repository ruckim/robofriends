import renderer from "react-test-renderer"
import React from 'react';
import MainPage from "./MainPage";

let wrapper;

beforeEach(()=>{
    let mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: "",
        isPending: false
    }
    wrapper = renderer.create(<MainPage {...mockProps}/>)
});

it("renders main page without crashing", ()=>{
    expect(wrapper).toMatchSnapshot()
});