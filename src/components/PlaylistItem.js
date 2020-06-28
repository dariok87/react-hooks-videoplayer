import React from "react";
import StyledPlaylistitem from "./styles/StyledPlaylistItem";

const PlaylistItem = ({ active, played }) => (
  <StyledPlaylistitem active={active} played={played}>
    PlaylistItem!!
  </StyledPlaylistitem>
);

export default PlaylistItem;
