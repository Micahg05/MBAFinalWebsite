import styled  from 'styled-components';

export const MainContainer = styled('div')`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
`;

export const MainTypes = styled('div')`
text-align: center;
cursor: none;
flex: 1;
margin: 2rem 0;
font-size: 2.4rem;
font-weight: 300;
position: relative;
`;

export const BrandTitle = styled('div')`
  font-family: 'Russo One', sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 8rem;
  color: transparent;

  @media only screen and (max-width: 1100px) {
    font-size: 4rem;
  }

  @media only screen and (max-width: 900px) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 700px) {
    font-size: 2.2rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: 1.6rem;
  }

  &:hover span:nth-child(1) {
    transform: translateY(-1rem);

    @media only screen and (max-width: 1100px) {
      transform: translateY(-0.7rem);
    }

    @media only screen and (max-width: 900px) {
      transform: translateY(-0.55rem);
    }

    @media only screen and (max-width: 700px) {
      transform: translateY(-0.47rem);
    }

    @media only screen and (max-width: 480px) {
      transform: translateY(-0.4rem);
    }
  }

  &:hover span:nth-child(2) {
    transform: translateY(1rem);

    @media only screen and (max-width: 1100px) {
      transform: translateY(0.7rem);
    }

    @media only screen and (max-width: 900px) {
      transform: translateY(0.55rem);
    }

    @media only screen and (max-width: 700px) {
      transform: translateY(0.47rem);
    }

    @media only screen and (max-width: 480px) {
      transform: translateY(0.4rem);
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
    clip-path: polygon(0 0, 100% 0%, 100% 50%, 0 50%);
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
    font-size: 1.2rem;
    color: #fff;
    background: #66e3be;
    width: 97.5%;
    padding-left: 5px;
    text-align: center;
    letter-spacing: 0.5rem;
    word-spacing: 1rem;
    line-height: 100%;

    @media only screen and (max-width: 1100px) {
      font-size: 1.2rem;
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
  height: 80px;
  width: auto;
`;
