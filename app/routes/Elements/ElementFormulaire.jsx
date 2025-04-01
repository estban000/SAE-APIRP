import React from "react";
// import styled from "styled-components";

export default function Input({ type, id, nom }) {
    return (
        <div className="input">
            <label htmlFor={id}>{nom}</label>
            <input type={type} name={id} id={id}/>
        </div>
    );
}