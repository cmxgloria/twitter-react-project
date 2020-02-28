import React from "react";
import "./Bar.css";
export default function Bar(props) {
  const barStyle = {
    width: `${(props.value / props.max) * 100}%`
  };
  return (
    <div className="bar-wrapper">
      <div style={barStyle} className="bar"></div>
    </div>
  );
}
