import styled  from 'styled-components';
import {device} from '../deviceSizes';

export const MainContainer = styled('div')`
    display: flex;
    flex-direction: column;
    flex: 1;
    font-family: 'Russo One', sans-serif;
`;

export const LeegSection = styled('div')`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 300;
`;

export const DocLink = styled('div')`
  font-size: 2rem;
`;

export const TwitterBannerContainer = styled('div')`
    padding: 60px;
    justify-content: center;
    align-items: center;
`;

export const BannerSection = styled('div')`
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    gap: 50px;
`;

export const BrandTitle = styled('div')`
  font-family: 'Russo One', sans-serif;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 6rem;
  color: transparent;
  cursor: none;

  @media only screen and ${device.mobileM} {
    font-size: 6.5rem;
  }

  @media only screen and ${device.mobileL} {
    font-size: 7rem;
  }

  @media only screen and ${device.tablet} {
    font-size: 8rem;
  }

  @media only screen and ${device.laptop} {
    font-size: 9rem;
  }

  @media only screen and ${device.laptopL} {
    font-size: 10rem;
  }

  @media only screen and ${device.desktop} {
    font-size: 11rem;
  }

  &:hover span:nth-child(1) {
    transform: translateY(-.4rem);

    @media only screen and ${device.mobileM} {
      transform: translateY(-0.47rem);
    }
  
    @media only screen and ${device.mobileL} {
      transform: translateY(-0.55rem);
    }
  
    @media only screen and ${device.tablet} {
      transform: translateY(-0.72rem);
    }
  
    @media only screen and ${device.laptop} {
      transform: translateY(-1.1rem);
    }
  
    @media only screen and ${device.laptopL} {
      transform: translateY(-1.2rem);
    }
  
    @media only screen and ${device.desktop} {
      transform: translateY(-1.5rem);
    }
  }

  &:hover span:nth-child(2) {
    transform: translateY(.4rem);

    @media only screen and ${device.mobileM} {
      transform: translateY(0.47rem);
    }
  
    @media only screen and ${device.mobileL} {
      transform: translateY(0.55rem);
    }
  
    @media only screen and ${device.tablet} {
      transform: translateY(0.72rem);
    }
  
    @media only screen and ${device.laptop} {
      transform: translateY(1.1rem);
    }
  
    @media only screen and ${device.laptopL} {
      transform: translateY(1.2rem);
    }
  
    @media only screen and ${device.desktop} {
      transform: translateY(1.5rem);
    }
  }

  &:hover span:nth-child(3) {
    opacity: 1;
    transition: opacity 700ms ease;
  }

  & span:nth-child(1),
  & span:nth-child(2) {
    position: absolute;
    top: 0;
    left: 0;
    color: #FFFFFF;
    transition: 0.5s;
    overflow: hidden;
  }

  & span:nth-child(1) {
    clip-path: polygon(0 0, 100% 0%, 100% 51%, 0 51%);
  }

  & span:nth-child(2) {
    clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
  }

  & span:nth-child(3) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 350ms ease;
    font-size: 1.8rem;
    color: #fff;
    background: #66e3be;
    width: 97.5%;
    padding: 1px 0 1px 5px;
    text-align: center;
    letter-spacing: 0.5rem;
    word-spacing: 1rem;
    line-height: 100%;

    @media only screen and (max-width: 1100px) {
      font-size: 1.4rem;
    }

    @media only screen and (max-width: 900px) {
      font-size: 1rem;
      width: 97%;
      letter-spacing: 4px;
    }

    @media only screen and (max-width: 700px) {
      font-size: 0.85rem;
      width: 96%;
      letter-spacing: 3px;
      word-spacing: 0.5rem;
    }

    @media only screen and (max-width: 480px) {
      font-size: 0.65rem;
      letter-spacing: 2px;
      word-spacing: 0.2rem;
    }
  }
`;

export const TwitterImage = styled('img')`
  height: 60px;
  width: auto;
`;
