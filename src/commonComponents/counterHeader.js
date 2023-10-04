import React from "react";
import "../styles.css";

const CounterHeader = ({ text, className }) => {
  return <div className={`${className} f-40 pb-10 pt-10`}>{text}</div>;
};

export default CounterHeader;
