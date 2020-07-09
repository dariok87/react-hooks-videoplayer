import React from "react";
import PlaylistHeader from "../PlaylistHeader";
import PlaylistItems from "../containers/PlaylistItems";
import NightMode from "../Nightmode";
import StyledPlaylist from "../styles/StyledPlaylist";

const Playlist = ({ video, active, nightModeCallback, nightMode }) => (
  <StyledPlaylist>
    <NightMode nightModeCallback={nightModeCallback} nightMode={nightMode}/>
    <PlaylistHeader />
    <PlaylistItems />
  </StyledPlaylist>
);

export default Playlist;
