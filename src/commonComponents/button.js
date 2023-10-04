import React from "react";
import "../styles.css";

const Button = ({ buttonText, onClickHandler }) => {
  return (
    <button
      onClick={onClickHandler}
      className={`pt-10 pb-10 pl-20 pr-20 bg-blue white-color f-20 ml-10`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
