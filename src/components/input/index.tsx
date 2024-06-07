import React from "react";
import "../../components/form/index.scss";
function Input({ title, onChange }) {
  return (
    <div>
      <div className="inputbox">
        <input onChange={onChange} required type="text" />
        <span>{title}</span>
        <i />
      </div>
    </div>
  );
}

export default Input;
