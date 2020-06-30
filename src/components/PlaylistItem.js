import React from "react";
import StyledPlaylistitem from "./styles/StyledPlaylistItem";

const PlaylistItem = ({ video, active, played }) => (
  <StyledPlaylistitem active={active} played={played}>
    <div className="wbn-player__video-nr">{video.num}</div>
  </StyledPlaylistitem>
);

export default PlaylistItem;
