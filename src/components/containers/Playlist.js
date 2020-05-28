import React from "react";
import PlaylistHeader from "../PlaylistHeader";
import PlaylistItems from "../containers/Playlistitems";
import NightMode from "../Nightmode";

const Playlist = (props) => (
  <>
    <NightMode />
    <PlaylistHeader />
    <PlaylistItems />
  </>
);

export default Playlist;
