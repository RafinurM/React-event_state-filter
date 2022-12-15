import React from "react";

function FilterItem(data) {
    return (
        <li onClick={data.func} className="filterItem">{data.data}</li>

    )
}


function Toolbar(props) {
    let toolbar = props.filters.map((element, index) => <FilterItem key={index} data={element} func={props.onselectFilter} />);
    return (
        <ul>{toolbar}</ul>
    )

}



export default Toolbar