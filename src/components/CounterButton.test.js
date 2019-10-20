import renderer from "react-test-renderer"
import React from 'react';
import CounterButton from "./CounterButton";

it("expect to render CounterButton component", ()=>{
    const CounterButtonComponent = renderer.create(<CounterButton />).toJSON();
    expect(CounterButtonComponent).toMatchSnapshot()
});

it("change CounterButton state", ()=>{
    const CounterButtonComponent = renderer.create(<CounterButton />);
    const instance = CounterButtonComponent.getInstance();
    expect(instance.state.count).toBe(0)
    instance.updateCount()
    expect(instance.state.count).toBe(1)
});

it("expect to change CounterButtonComponents state", ()=>{
    const mockColor = "red";
    const component = renderer.create(<CounterButton color={mockColor}/>);
    component.root.findByType('button').props.onClick();
    const instance = component.getInstance();
    expect(instance.state.count).toBe(1);
    expect(instance.state).toEqual({count: 1})
    component.root.findByType('button').props.onClick();
    expect(instance.state).toEqual({count: 2})
    expect(instance.props).toEqual({color: "red"})
});
