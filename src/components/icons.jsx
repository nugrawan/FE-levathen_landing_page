import React from "react";

function ChecklistIcon({ color }) {
  return (
    <svg
      width="33"
      height="25"
      viewBox="0 0 33 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
    >
      <path
        d="M3.64648 14.1884L11.0674 21.2846L29.7321 3.43652"
        stroke={color}
        strokeWidth="5.49171"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { ChecklistIcon };
