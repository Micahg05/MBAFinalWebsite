import React from 'react';
import { MainContainer, MainTypes, BrandTitle, TwitterImage} from './style';
import TwitterLogo from '../images/TwitterLogo.svg';

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
            <TwitterImage src={TwitterLogo} alt="TwitterLogo"/>
        </MainContainer>
    );
}