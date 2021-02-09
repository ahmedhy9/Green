import React from "react";
import "./ContentSec1.css";
function ContentSec1({ headline, des }) {
  return (
    <div className="content-items">
      <h4>{headline}</h4>
      <p>{des}</p>
    </div>
  );
}
export default ContentSec1;
