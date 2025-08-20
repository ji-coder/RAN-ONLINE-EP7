import React from "react";


const Button = ({ title, onClick }) => {

  return (
    <div>
      <button className="border border-white text-white px-4 py-2 rounded-md transition ease-in-out hover:bg-gray-600 hover:text-white" onClick={onClick} >
        {title}
      </button>

    </div>
  );
};

export default Button;
