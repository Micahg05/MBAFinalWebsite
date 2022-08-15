import React from 'react';
import { MainContainer, MainImageContainer, CenterImage, StyledLink} from './style';
import DunkLogo from '../images/DunkLogo.png';

export const Main = () => {
    return (
        <MainContainer>
            <MainImageContainer>
                <StyledLink to='/intro'>
                    <CenterImage src={DunkLogo} alt="dunk logo" />
                </StyledLink>
            </MainImageContainer>
        </MainContainer>
    );
}