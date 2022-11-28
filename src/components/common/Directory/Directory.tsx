import {Key} from "react";
import DirectoryItems from "./DirectoryItems";
import homeItems from "../../../data/home/homeItems";
import { DirectoryContainer } from "./styles/Directory";

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  route: string;
};

const Directory = () => (
  <DirectoryContainer>
    {homeItems.map((category) => (
      <DirectoryItems key={category.id} category={category} />
    ))}
  </DirectoryContainer>
);

export default Directory;
