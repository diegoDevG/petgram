import styled, { keyframes } from "styled-components";
import { fade } from '../../styles/animation'

export const ImageWrapper = styled.div`
  border-radius: 10px;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`;

export const Img = styled.img`
  animation: 2s ${fade} ease; 
  position: absolute;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  top: 0;
  width: 100%;
`;
export const Button = styled.button`
  padding-top: 8px;
  display: flex;
  align-items: center;
  & svg {
    margin-right: 4px;
  }
`;

export const Article = styled.article`
  min-height: 200px;
`
