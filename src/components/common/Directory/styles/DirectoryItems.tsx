import styled from "styled-components";

type BackgroundImageProp = {
  imageUrl: string;
}
export const BackgroundImage = styled.div <BackgroundImageProp>`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  //Retrieve imageUrl prop from DirectoryItem:
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const BackgroundBody = styled.div`
  align-items: center;
  background-color: white;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90px;
  opacity: 0.7;
  padding: 0 25px;
  position: absolute;
  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
  }
  p {
    font-weight: lighter;
    font-size: 16px;
  }
`;

export const DirectoryContainer = styled.div`
  align-items: center;
  border: 1px solid black;
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  margin: 0 7.5px 15px;
  min-width: 30%;
  overflow: hidden;
  height: 280px;
  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      //control the speed of animations:
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    & ${BackgroundBody} {
      opacity: 0.9;
    }
  }
  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;
