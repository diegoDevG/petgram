import styled from 'styled-components'
import {Link as LinkRouter} from '@reach/router'
import { fade } from './../../styles/animation';

export const Nav = styled.nav`
    align-items: center;
    background: #fcfcfc;
    border-top: 1px solid #e0e0e0;
    bottom: 0;
    display: flex;
    height: 50px;
    justify-content: space-around;
    left: 0;
    margin: 0 auto;
    position: fixed;
    right: 0;
    width: 100%;
    z-index: 1000;
    font-size: 32px;
    `;

export const Link = styled(LinkRouter)`
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;

  &[aria-current]{
    color: #000;

    &:after{
      animation: 1s ${fade} ease; 
      content: '-';
      position: absolute;
      bottom: 0;
      font-size: 34px;
      line-height: 20px;
    }
  }
`;
