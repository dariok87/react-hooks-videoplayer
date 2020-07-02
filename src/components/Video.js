import React from "react";
import ReactPlayer from "react-player";
import StyledVideoWrapper from "./styles/StyledVideoWrapper";
import StyledVideo from "./styles/StyledVideo";

const Video = ({ active, autoplay, endCallback, progressCallback }) => (
  <StyledVideo>
    <StyledVideoWrapper>
      <ReactPlayer />
    </StyledVideoWrapper>
  </StyledVideo>

export default Video;
