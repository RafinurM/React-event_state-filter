import React from "react";
function ProjectList(props) {

    return <div className="imageContainer">
        {props.projects.map((item) => <div><img className="image" src={item.img} alt={item.category} /></div>)}
    </div>

}

export default ProjectList
