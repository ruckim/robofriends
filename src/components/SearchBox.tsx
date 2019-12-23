import React from "react"

interface ISearchBoxProps {
    searchChange(event: React.SyntheticEvent<HTMLInputElement>): void
}

export const SearchBox = ({searchChange}: ISearchBoxProps) => {
    return (
        <div className={"pa2"}>
            <input aria-label="Search Robots" id={"searchBox"} type="search" placeholder={"search robots"} className={"bg-lightest-blue pa3 ba"} onChange={searchChange}/>
        </div>
    )
};