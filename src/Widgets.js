import React from 'react';
import Trends from "./Trends"
import "./Widgets.css";

function Widgets() {
    return (
        <div className="widgets">
            <input placeholder="Search"></input>
            <Trends /> 
        </div>     
    )
}

export default Widgets
