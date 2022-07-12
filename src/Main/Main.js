import React from 'react';
import { CardImage, MainContainer, MainImageContainer, Card, CenterImage} from './style';
import Tilt from 'react-parallax-tilt';
import InfoSections from './InfoSections';
import PlayerAsset from '../images/PlayerAsset.png';
import DunkLogo from '../images/DunkLogo.png';

export const Main = () => {
    return (
        <MainContainer>
            
            {/* <MainImageContainer>
                <Tilt>
                    <Card>
                        <CardImage/>
                    </Card>
                </Tilt>
            </MainImageContainer>
            <InfoSections /> */}
            <MainImageContainer>
                <CenterImage src={DunkLogo} alt="dunk logo" />
            </MainImageContainer>
        </MainContainer>
    );
}