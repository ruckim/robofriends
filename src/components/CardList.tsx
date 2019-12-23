import React from 'react';
import Card from "./Card";
import {IRobot} from "./MainPage";

const CardList = ({robots}: {robots: IRobot[]}) => {
    return (
        <div>
            {robots.map((robot: IRobot, i: number) => {
                return (<Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>)
            })}
        </div>
    )
};

export default CardList