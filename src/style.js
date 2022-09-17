import styled, { createGlobalStyle } from 'styled-components';
import {device} from './deviceSizes';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 14px;
    @media ${device.tablet} {
      font-size: 15px;
    }
    @media ${device.laptop} {
      font-size: 16px;
    }
    @media ${device.desktop} {
      font-size: 18px;
    }
  }
  #root {
    margin: 0;
    height: 100vh;
    width: 100vh;
  }
  body {
    background: #000000;
    margin: 0px;
    height: 100%;
    width: 100%;
  }
  body::-webkit-scrollbar {
    background-color:#212529;
    width: .6rem;
    height: .6rem;
  }
  body::-webkit-scrollbar-track {
    background-color:#212529;
    width: .4rem;
  }
  body::-webkit-scrollbar-thumb {
    background-color: #212529;
    border-radius:.3rem;
  }
  body::-webkit-scrollbar-button {
    display:none;
  }
  body::-webkit-scrollbar-corner {
    background-color: #212529;
  }
  body::-webkit-scrollbar-track-piece {
    background-color: #212529;
  }
`;

export const AppContainer = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;