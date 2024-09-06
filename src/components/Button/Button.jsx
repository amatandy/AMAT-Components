/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Button = ({ size, hover, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    size: size || "small",
    hover: hover || "default",
  });

  return (
    <div
      className={`button ${state.size} ${state.hover} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className="button-small">
        {state.size === "small" && <>Button Small</>}

        {state.size === "medium" && <>Button Medium</>}

        {state.size === "large" && <>Button Large</>}
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        hover: "yes",
      };

    case "mouse_leave":
      return {
        ...state,
        hover: "default",
      };
  }

  return state;
}

Button.propTypes = {
  size: PropTypes.oneOf(["large", "medium", "small"]),
  hover: PropTypes.oneOf(["yes", "default"]),
};
