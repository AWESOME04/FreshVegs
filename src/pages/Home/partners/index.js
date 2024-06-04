import React from "react";
import partners from "../../../assets/images/partners.PNG";
import '../stats/style.css';

export default function Partners(){
    return (
        <div className="stats-section">
            <img src={partners} alt="stats-section"/>
        </div>
    )
}