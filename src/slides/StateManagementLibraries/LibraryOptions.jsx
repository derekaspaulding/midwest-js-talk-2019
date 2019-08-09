import React from "react";
import { Slide, Image, Heading } from "spectacle";
import libraryOptionsImage from "./libraryDownloads.png";

export const LibraryOptions = () => (
  <Slide>
    <Heading textColor="tertiary" size={3}>
      Library Options
    </Heading>
    <Image src={libraryOptionsImage} />
  </Slide>
);
