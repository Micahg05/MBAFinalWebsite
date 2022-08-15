import styled  from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  box-shadow: inset 0 0 0 0 #AD974F;
  color: #231F20;
  margin: 0 -.25rem;
  padding: 0 .25rem;
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #efce7f;

  &:hover {
    box-shadow: inset 300px 0 0 0 #AD974F;
    color: white;
    -webkit-text-stroke-width: 0px;
  }
`;

export const Title = styled('div')`
  font-size: 3rem;
  text-align: center;
  cursor: pointer;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  padding: 10px;
`;

export const ButtonsContainer = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;