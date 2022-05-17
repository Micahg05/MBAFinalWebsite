import styled  from 'styled-components';
import {device} from '../../../deviceSizes';

export const OwnershipLanyardContainer = styled('div')`
    display: flex;
    flex: 1;
    margin-top: 20px;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 10px;
    padding: 30px;
    color: ${props => props.bg ? props.bg : ''};
`;

export const Title = styled('div')`
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    font-size: 30px;
    -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #242526;
`;

export const ImageContainer = styled('div')`

`;

export const NumberContainer = styled('div')`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`;

export const Number = styled('div')`
font-size: 60px;
-webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #242526;
`;

export const SubText = styled('div')`
font-size: 30px;
text-transform: uppercase;
-webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #242526;
`;

export const Description = styled('div')`
 color: #242526;
`;

export const LanyardImage = styled('img')`
    height: 300px;
`;

export const DescriptionContainer = styled('div')`
    flex: 3;
    display: flex;
    flex-direction: column;
    line-height: 1.7;
`;

export const LanyardContainer = styled('div')`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;