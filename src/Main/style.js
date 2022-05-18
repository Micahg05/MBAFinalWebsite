import styled  from 'styled-components';
import PlayerCardNewPrototype from '../images/PlayerCardNewPrototype.png';

export const MainContainer = styled('div')`
    display: flex;
    flex-direction: column;
    min-height: 800px;
`;

export const MainImageContainer = styled('div')`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
`;

export const Card = styled('div')`
    display: flex;
    border-radius: 18px;
    background: white;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
    text-align: center;
    transition: 0.5s ease;
    cursor: pointer;
    margin:30px;
`;

export const CardImage = styled('div')`
    background: url(${PlayerCardNewPrototype});
    height: 29rem;
    width: 23rem;
    border-radius: 15px;
    background-size: cover;
`;
