import styled  from 'styled-components';

export const IntroSectionContainer = styled('div')`
    background: #000000;
`;

export const MainCard = styled('div')`
  border: 2px solid #242526;
  border-radius: 20px;
  background: #FFFFFF;
  padding: 30px 70px;
`;

export const BallContainer = styled('div')`
  height: 500px;
`;

export const BallImage = styled('img')`
  height: 50px;
  width: auto;
`;

export const Title = styled('div')`
  font-size: 150px;
  background: #000000;
  padding-left: 20px;
  text-color: #000000;
  text-align: center;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #FFFFFF;
`;

export const SectionContainer = styled('div')`
  border-bottom: ${props => props.border ? '2px solid black' : ''};
  display: flex;
  flex: 1;
  flex-direction: column;
  font-family: 'Oswald', sans-serif;
  align-items: center;
  font-size: 24px;
  color: #242526;
`;

export const Header = styled('div')`
  font-size: 50px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-transform: uppercase;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #242526;
`;

export const BodySections = styled('div')`
  font-size: 24px;
  padding: 40px 0;
  display: flex;
  flex-direction: row;
  color: #242526;
  font-weight: 400;
`;

export const DescriptionContainer = styled('div')`
padding: 20px;
`;

export const OwnershipDescriptionContainer = styled('div')`
flex: 1;
display: flex;
flex-direction: column;
`;

export const LanyardModalContainer = styled('div')`
display: flex;
flex-direction: column;
flex-wrap: wrap;
`;

export const ToggleImage = styled('img')`
  height: 50px;
  width: auto;
`;

export const SectionHeaderImage = styled('img')`
  height: auto;
  width: 80px;
  margin-right: 20px;
`;

export const HeaderContentContainer = styled('div')`
  display: flex;
  align-items: center;
`;

export const InfoSection = styled('div')`
  flex: 1;
  display: flex;
  width: 100%;
  padding: 20px;
`;

export const InfoSectionCard = styled('div')`
  width: 50%;
  height: 500px;
  background: white;
`;
