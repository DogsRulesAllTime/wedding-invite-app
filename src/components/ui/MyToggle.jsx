import React from "react";
import "./myToggle.css";
export default function MyToggle({func}) {
  return (
    <div>
      <div className="toggle">
        <label className="switch" z>
          <input type="checkbox" />
          <span className="slider round" onClick={func}></span>
        </label>
      </div>
    </div>
  );
}
