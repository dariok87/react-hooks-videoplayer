import React from "react";
import PlaylistHeader from "../PlaylistHeader";
import Playlistitems from "../containers/Playlistitems";
import NightMode from "../Nightmode";

const DKPlayer = (props) => {
  <>
    <NightMode />
    <PlaylistHeader />
    <Playlistitems />
  </>;
};

export default DKPlayer;
