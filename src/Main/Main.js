import React from 'react';
import { MainContainer, MainTypes, BrandTitle, TwitterImage, DocLink, LeegSection, TwitterBannerContainer, BannerSection} from './style';
import TwitterLogo from '../images/TwitterLogo.svg';

export const Main = () => {
    return (
        <MainContainer>
            <LeegSection>
                <BrandTitle>
                    leegs
                    <span>leegs</span>
                    <span>leegs</span>
                    <span>coming soon</span>
                </BrandTitle>
            </LeegSection>
            <TwitterBannerContainer>
                <BannerSection>
                    <DocLink>DOCS</DocLink>
                    <TwitterImage src={TwitterLogo} alt="TwitterLogo"/>
                </BannerSection>
            </TwitterBannerContainer>
        </MainContainer>
    );
}