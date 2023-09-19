import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "../icons/icons";

const Inputs = ({
  id,
  name,
  label,
  type,
  value,
  onChange,
  error,
  showPass,
  onTogglePass,
}) => {


    const inputs = showPass ? 'text' : type

  return (
    <div className="w-full relative ">
      <label className="text-gray-500 font-bold" htmlFor={id}>
        {label}
      </label>
      <input
        type={inputs}
        id={id}
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border rounded-md"
      />
      
      {type ===
        "password" && (
          <button className="absolute top-0 bottom-0 pr-3 right-0" onClick={onTogglePass}>
            {showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
        )}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Inputs;
