import React from "react";
// import classNamees from "./MyInput.module.css"
import "./MyInput.css"

export default function MyInput({label, className,changeGuest,name}) {
  return (
    <div className={className}>

<div className="page">

  <div className="field field_v2">
    <label for="last-name" className="ha-screen-reader">{label}</label>
    <input id="last-name"  className="field__input" placeholder="Виктор"
    name={name}
    onChange={(event)=>changeGuest(event.target.name,event.target.value)}/>
    <span className="field__label-wrap" aria-hidden="true">
      <span className="field__label">{label}</span>
    </span>
  </div>    
  </div>
  </div>
  );
}
