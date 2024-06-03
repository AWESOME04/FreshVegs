import React from "react";
import stats from "../../../assets/images/stats.png";
import './style.css'

export default function Stats(){
    return (
        <div className="stats-section">
            <img src={stats} alt="stats-section"/>
        </div>
    )
}