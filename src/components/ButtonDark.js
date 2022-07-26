import React from "react";
import PropTypes from "prop-types";
import "./Darkbtnhover.css";

ButtonDark.propTypes = {
  text: PropTypes.string,
};

export default function ButtonDark(props) {
  return (
    <button className={`btn btn-primary fw-bold mybutton3 ${props.className}`}>
      {props.text}
    </button>
  );
}
