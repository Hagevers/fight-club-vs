import React from "react";
import '../Styling/Dashboard.css';
import { SidebarData } from "./SidebarData";

function Sidebar(){
    return(
        <div className="sideBar">
            <ul className="sideBarList">
                {SidebarData.map((val, key) => {
                    return (
                        <li id={window.location.pathname == val.link ? "active" : ""} key={key} className="row" onClick={() => window.location.pathname = val.link}>
                            <div id="icon">{val.icon}</div>{" "}
                            <div id="title">
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