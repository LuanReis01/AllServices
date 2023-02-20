import React from "react";


import "./styles.css";

export default function AdversiteCard ({id, file, name, description, category, handleRemove }) {
    return (
     <div className="project-card">
        <p>{file}</p>
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="category-text">{category}</p> 
     </div>
    )
}