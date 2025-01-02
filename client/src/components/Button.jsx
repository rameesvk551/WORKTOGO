import React from 'react';


function Button({ label, type, style, icon, onClick }) {
  return (
    <button
      onClick={onClick}
      type={type || 'button'}
      className={`flex items-center justify-center text-base ${style}`}
    >
      {label}
      {icon && <div className="ml-2">{icon}</div>}
    </button>
  );
}



export default Button;
