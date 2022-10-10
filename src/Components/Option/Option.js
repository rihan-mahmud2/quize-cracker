import React from "react";

const Option = ({ option }) => {
  return (
    <div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <input
            type="radio"
            name="radio-6"
            className="radio checked:bg-red-500"
            checked
          />
          <span className="label-text">{option}</span>
        </label>
      </div>
    </div>
  );
};

export default Option;
