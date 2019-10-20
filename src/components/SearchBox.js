import React from "react"

export const SearchBox = ({searchChange}) => {
    return (
        <div className={"pa2"}>
            <input aria-label="Search Robots" id={"searchBox"} type="search" placeholder={"search robots"} className={"bg-lightest-blue pa3 ba"} onChange={searchChange}/>
        </div>
    )
};