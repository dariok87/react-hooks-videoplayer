import React from "react";
import StyledPlaylistitem from "./styles/StyledPlaylistItem";

const PlaylistItem = (props) => (
  <StyledPlaylistitem active={active} played={played}>
    PlaylistItem!!
  </StyledPlaylistitem>
);

export default PlaylistItem;
