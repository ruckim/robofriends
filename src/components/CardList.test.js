import renderer from "react-test-renderer"
import React from 'react';
import CardList from "./CardList";

it("expect to render CardList component", ()=>{
    const mockRobots = [
        {
        id:"id",
        mail:"mail",
        name:"name"
        }
    ];
    const CardListComponent = renderer.create(<CardList robots={mockRobots}/>).toJSON();
    expect(CardListComponent).toMatchSnapshot()
});
