import React from "react";
import '../Styling/Dashboard.css';
import { SidebarData } from "./SidebarData";

function Sidebar(props){
    return(
        <div className="sideBar">
            <ul className="sideBarList">
                {SidebarData.map((val, key) => {
                    return (
                        <li id={props.whichActive === val.title ? "active" : ""} key={key} className="row" onClick={()=>val.func(props.acti)}>
                            <div id="icon">{val.icon}</div>
                            <div id="title" >
                                {val.title}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar