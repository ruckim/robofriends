import React from "react"

export const SearchBox = ({searchChange}) => {
    return (
        <div className={"pa2"}>
            <input type="search" placeholder={"search robots"} className={"bg-lightest-blue pa3 ba"} onChange={searchChange}/>
        </div>
    )
};