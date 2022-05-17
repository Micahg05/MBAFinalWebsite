import React from 'react';
import { CardImage, MainContainer, MainImageContainer, Card} from './style';
import Tilt from 'react-parallax-tilt';
import InfoSections from './InfoSections';
import PlayerAsset from '../images/PlayerAsset.png';

export const Main = () => {
    return (
        <MainContainer>
            <MainImageContainer>
                <Tilt>
                    <Card>
                        <CardImage/>
                    </Card>
                </Tilt>
            </MainImageContainer>
            <InfoSections />
        </MainContainer>
    );
}