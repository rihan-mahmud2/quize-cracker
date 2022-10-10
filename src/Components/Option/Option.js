import React from "react";

const Option = ({ option }) => {
  return (
    <div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <div className="flex justify-center items-center">
            <input
              type="radio"
              name="radio-6"
              className="radio checked:bg-red-500"
              checked
            />
            <span className="label-text ml-3">{option}</span>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Option;
