import renderer from "react-test-renderer"
import React from 'react';
import Card from "../Card"

it("expect to render Card component", ()=>{
    const CardComponent = renderer.create(<Card />).toJSON();
    expect(CardComponent).toMatchSnapshot()
});
