import React from "react";
import Skill from "./Skill"
import Skills from "./content_skills"

function skills1() {
    return <div className="skills">
        <h1>Technical skills</h1>
        <div className="flex">
            {Skills.map(skill => <Skill
                key={skill.key}
                title={skill.title}
                content={skill.content}
            />)}
        </div>
    </div>
}
export default skills1