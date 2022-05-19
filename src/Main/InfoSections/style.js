import styled  from 'styled-components';

export const IntroSectionContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainCard = styled('div')`
  border: 2px solid #242526;
  border-radius: 20px;
  background: #FFFFFF;
  padding: 30px 70px;
`;

export const Title = styled('div')`
  font-size: 150px;
  padding-left: 20px;
  text-color: #000000;
  text-align: center;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #FFFFFF;
`;

export const SectionHeaderImage = styled('img')`
  height: auto;
  width: 8rem;
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
  justify-content: center;
`;

export const InfoSectionCard = styled('div')`
  display: flex;
  flex-direction: column;
  background: green;
`;


export const TitleText = styled('div')`
  color: white;
  font-size: 40px;
`;

export const TitleSubheader = styled('div')`
  
`;

export const CollectionDescription = styled('div')`
  color: white;
`;

export const Wrapper = styled('section')`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Oswald', sans-serif;
  color: #fff;
`;

export const CardWrapper = styled('div')`
  position: sticky;
  top: ${props => props.topsProp}px;
  width: 800px;
  margin: 200px;
`;

export const Card = styled('div')`
    background: linear-gradient(#434343,#262626);
    border-radius: 10px;
    box-shadow: -2rem 0 3rem -2rem #000;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    font-size: 25px;
`;

export const SectionHeading = styled('div')`
  margin: 20px 0 30px 20px;
  font-size: 50px;
  color: #000000;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #FFFFFF;
`;
