import React from "react";
import { ThemeProvider } from "styled-components";
import Video from "../Video";
import Playlist from "../containers/Playlist";

const DKPlayer = (props) => {
  return (
    <>
      <Video />
      <Playlist />
    </>
  );
};

export default DKPlayer;
