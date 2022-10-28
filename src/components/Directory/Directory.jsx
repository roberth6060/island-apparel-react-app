import React from "react";
import DirectoryItems from "./DirectoryItems";
import homeItems from "../../data/home/homeItems";
import { DirectoryContainer } from "./styles/Directory";

const Directory = () => (
  <DirectoryContainer>
    {homeItems.map((category) => (
      <DirectoryItems key={category.id} category={category} />
    ))}
  </DirectoryContainer>
);

export default Directory;
