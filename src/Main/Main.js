import React from 'react';
import { MainContainer, MainTypes, BrandTitle, BrandSub, MainImageContainer, CenterImage, StyledLink} from './style';
import DunkLogo from '../images/DunkLogo.png';

export const Main = () => {
    return (
        <MainContainer>
            <MainTypes>
                <BrandTitle>
                    leegs
                    <span>leegs</span>
                    <span>leegs</span>
                    <span>coming soon</span>
                </BrandTitle>
            </MainTypes>
            {/* <MainImageContainer>
                <StyledLink to='/intro'>
                    <CenterImage src={DunkLogo} alt="dunk logo" />
                </StyledLink>
            </MainImageContainer> */}
        </MainContainer>
    );
}