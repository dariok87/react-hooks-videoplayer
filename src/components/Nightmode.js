import React from "react";
import StyledNightmode from "./styles/StyledNightmode";

const NightMode = (props) => (
  <StyledNightmode>
    <span>NightMode:</span>
    <label className="switch">
      <input type="checkbox" checked={nightMode}></input>
    </label>
  </StyledNightmode>
);

export default NightMode;
