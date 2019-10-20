import renderer from "react-test-renderer"
import React from 'react';
import {SearchBox} from "./SearchBox";

it("expect to render SearchBox component", ()=>{
    const SearchBoxComponent = renderer.create(<SearchBox />).toJSON();
    expect(SearchBoxComponent).toMatchSnapshot()
});
