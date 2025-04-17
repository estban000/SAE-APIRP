import React from "react";
// import styled from "styled-components";


// Pour tous les inputs en texte (texte, mail, tel, url...)
export default function InputTexte({ type, id, nom }) {
    return (
        <div className="input">
            <label htmlFor={id}>{nom}</label>
            <input type={type} name={id} id={id}></input>
        </div>
    );
}

// Pour un textarea
export function TextArea({ id, nom }) {
    return (
        <div className="input">
            <label htmlFor={id}>{nom}</label>
            <textarea name={id} id={id}></textarea>
        </div>
    );
}

//Pour une radio box. 
export function InputRadio({ name, id, nom}){
    return (
        <div>
            <input type="radio" name={name} id={id} value={id}/>
            <label htmlFor={id}>{nom}</label>
        </div>
    );
}

// Pour une CheckBox
export function InputCheckBox({id, nom}){
    return (
        <div>
            <input type="checkbox" name={id} id={id} />
            <label htmlFor={id}>{nom}</label>
        </div>
    );
}

export function FieldsetForm({titre, children}){
    return (
        <fieldset>
            <legend>{titre}</legend>
            {children}
        </fieldset>
    );
}