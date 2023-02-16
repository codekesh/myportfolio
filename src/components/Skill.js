import React from "react";

function Skill(props) {
    return (
        <div className="card">
            <h2>{props.title}</h2>
            <ul>{props.content[0]}</ul>
            <ul>{props.content[1]}</ul>
            <ul>{props.content[2]}</ul>
            <ul>{props.content[3]}</ul>
        </div>
    )
}

export default Skill