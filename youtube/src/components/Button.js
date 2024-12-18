import React from "react";

function Button({ label }) {
  return (
    <button className="px-5 py-2 m-2 bg-gray-200 rounded-lg">{label}</button>
  );
}

export default Button;
